// Resize and compress images to WebP using your installed Google Chrome.
//
//   node scripts/compress.mjs <input> <output.webp> [maxWidth=2000] [maxKB=250]
//   node scripts/compress.mjs photo.jpg images/process-01.webp 1600 200
//
// Several jobs at once: separate them with "--"
//   node scripts/compress.mjs a.jpg images/a.webp 2000 250 -- b.jpg images/b.webp 480 30
//
// Picks the highest WebP quality that fits under maxKB (never upscales).

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, extname } from "node:path";
import { chromium } from "playwright";

const MIME = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };

const jobs = [];
let cur = [];
for (const a of process.argv.slice(2).concat("--")) {
  if (a === "--") { if (cur.length) jobs.push(cur); cur = []; } else cur.push(a);
}
if (!jobs.length) {
  console.error("Usage: node scripts/compress.mjs <input> <output.webp> [maxWidth=2000] [maxKB=250] [-- more jobs]");
  process.exit(1);
}

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage();

for (const [input, output, maxW = "2000", maxKB = "250"] of jobs) {
  const type = MIME[extname(input).toLowerCase()];
  if (!type) { console.error(`Skip ${input}: unsupported type`); continue; }
  const dataUrl = `data:${type};base64,${readFileSync(input).toString("base64")}`;

  const result = await page.evaluate(async ({ dataUrl, maxW, maxBytes }) => {
    const img = new Image();
    img.src = dataUrl;
    await img.decode();
    const scale = Math.min(1, maxW / img.naturalWidth);
    const w = Math.round(img.naturalWidth * scale), h = Math.round(img.naturalHeight * scale);
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    const ctx = c.getContext("2d");
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, w, h);
    const encode = (q) => c.toDataURL("image/webp", q);
    const bytes = (url) => Math.floor((url.length - url.indexOf(",") - 1) * 3 / 4);
    // Binary search for the best quality under the size limit
    let lo = 0.4, hi = 0.92, best = encode(lo), bestQ = lo;
    for (let i = 0; i < 7; i++) {
      const q = (lo + hi) / 2, url = encode(q);
      if (bytes(url) <= maxBytes) { best = url; bestQ = q; lo = q; } else hi = q;
    }
    const top = encode(0.92);
    if (bytes(top) <= maxBytes) { best = top; bestQ = 0.92; }
    return { b64: best.slice(best.indexOf(",") + 1), w, h, q: Math.round(bestQ * 100) };
  }, { dataUrl, maxW: Number(maxW), maxBytes: Number(maxKB) * 1024 });

  mkdirSync(dirname(output), { recursive: true });
  const buf = Buffer.from(result.b64, "base64");
  writeFileSync(output, buf);
  console.log(`${output}  ${result.w}x${result.h}  q${result.q}  ${Math.round(buf.length / 1024)} KB`);
}

await browser.close();
