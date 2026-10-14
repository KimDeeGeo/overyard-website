// Local preview server with gzip (closer to GitHub Pages than serve.ps1;
// use this one when running Lighthouse).
//
//   node scripts/serve.mjs          → http://localhost:8090
//   node scripts/serve.mjs 8095     → custom port
import { createServer } from "node:http"; import { readFileSync, existsSync, statSync } from "node:fs"; import { gzipSync } from "node:zlib"; import { extname, resolve } from "node:path";
const T = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon" };
const root = resolve(import.meta.dirname, "..");
createServer((q, s) => { let p = decodeURIComponent(new URL(q.url, "http://x").pathname); if (p.endsWith("/")) p += "index.html"; const f = resolve(root, "." + p);
  if (!existsSync(f) || statSync(f).isDirectory()) { s.writeHead(404); return s.end(); }
  let b = readFileSync(f); const t = T[extname(f)] || "application/octet-stream"; const h = { "Content-Type": t, "Cache-Control": "max-age=600" };
  if (/text|svg|javascript/.test(t) && /gzip/.test(q.headers["accept-encoding"] || "")) { b = gzipSync(b); h["Content-Encoding"] = "gzip"; }
  s.writeHead(200, h); s.end(b); }).listen(Number(process.argv[2]) || 8090, () => console.log("Overyard preview: http://localhost:" + (Number(process.argv[2]) || 8090)));
