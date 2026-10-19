// Resize and compress one or more images to WebP using your installed Google Chrome.
//
//   node scripts/compress.mjs <input> <output.webp> [maxEdge=2000] [maxKB=250]
//   node scripts/compress.mjs a.jpg images/a.webp 2000 250 -- b.jpg images/b.webp 900 90
//
// maxEdge is the longest side in pixels (never upscales). Picks the highest
// WebP quality that fits under maxKB. For project images use scripts/images.mjs.

import { openEncoder } from "./webp.mjs";

const jobs = [];
let cur = [];
for (const a of process.argv.slice(2).concat("--")) {
  if (a === "--") { if (cur.length) jobs.push(cur); cur = []; } else cur.push(a);
}
if (!jobs.length) {
  console.error("Usage: node scripts/compress.mjs <input> <output.webp> [maxEdge=2000] [maxKB=250] [-- more jobs]");
  process.exit(1);
}
const enc = await openEncoder();
for (const [input, output, maxEdge = "2000", maxKB = "250"] of jobs) {
  const r = await enc.encode(input, output, Number(maxEdge), Number(maxKB));
  console.log(`${output}  ${r.w}x${r.h}  q${r.q}  ${r.kb} KB`);
}
await enc.close();
