// Shared WebP encoder: resizes in your installed Chrome and picks the highest
// quality that fits under a size limit. Used by compress.mjs and images.mjs.
// Re-encoding through a canvas drops ALL metadata (EXIF, GPS, camera, software).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, extname, resolve } from "node:path";
import { chromium } from "playwright";

const MIME = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };
const HOST = "http://img.local/";

export async function openEncoder() {
  const browser = await chromium.launch({ channel: "chrome" });
  let page;
  async function fresh() {
    if (page) await page.close().catch(() => {});
    page = await browser.newPage();
    // Serve files from disk on a fake origin so large images aren't inlined as base64
    await page.route(HOST + "**", (route) => {
      const url = route.request().url();
      if (url === HOST) return route.fulfill({ contentType: "text/html", body: "<!doctype html><title>enc</title>" });
      const file = decodeURIComponent(url.slice(HOST.length));
      route.fulfill({ contentType: MIME[extname(file).toLowerCase()] || "application/octet-stream", body: readFileSync(file) });
    });
    await page.goto(HOST);
  }
  await fresh();
  let count = 0;
  return {
    // maxEdge = longest side in px (never upscales); maxKB = size target
    async encode(input, output, maxEdge = 2000, maxKB = 250) {
      if (!MIME[extname(input).toLowerCase()]) throw new Error("Unsupported image type: " + input);
      if (++count % 40 === 0) await fresh();   // keep Chrome's memory in check on long runs
      const r = await page.evaluate(async ({ src, maxEdge, maxBytes }) => {
        const img = new Image(); img.src = src; await img.decode();
        const scale = Math.min(1, maxEdge / Math.max(img.naturalWidth, img.naturalHeight));
        const w = Math.round(img.naturalWidth * scale), h = Math.round(img.naturalHeight * scale);
        const c = document.createElement("canvas"); c.width = w; c.height = h;
        const ctx = c.getContext("2d"); ctx.imageSmoothingQuality = "high"; ctx.drawImage(img, 0, 0, w, h);
        img.src = "";
        const enc = (q) => c.toDataURL("image/webp", q);
        const bytes = (u) => Math.floor((u.length - u.indexOf(",") - 1) * 3 / 4);
        let lo = 0.4, hi = 0.92, best = enc(lo), bestQ = lo;
        const top = enc(0.92);
        if (bytes(top) <= maxBytes) { best = top; bestQ = 0.92; }
        else for (let i = 0; i < 7; i++) { const q = (lo + hi) / 2, u = enc(q); if (bytes(u) <= maxBytes) { best = u; bestQ = q; lo = q; } else hi = q; }
        c.width = c.height = 0;
        return { b64: best.slice(best.indexOf(",") + 1), w, h, q: Math.round(bestQ * 100) };
      }, { src: HOST + encodeURIComponent(resolve(input)), maxEdge, maxBytes: maxKB * 1024 });
      mkdirSync(dirname(output), { recursive: true });
      const buf = Buffer.from(r.b64, "base64");
      writeFileSync(output, buf);
      return { w: r.w, h: r.h, q: r.q, kb: Math.round(buf.length / 1024) };
    },
    close: () => browser.close(),
  };
}
