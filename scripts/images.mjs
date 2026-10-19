// Build the published WebP images for projects, team and process photos.
//
//   node scripts/images.mjs                  all CLEARED projects + team + process
//   node scripts/images.mjs pool-courtyard-citrus   one project
//   node scripts/images.mjs --force <slug>   build even if cleared is false (preview only; don't commit)
//
// Sources live in _source/ (git-ignored, full size). For each image listed in
// images/projects/<slug>/project.json, the source is _source/<slug>/<name>.(jpg|png|webp)
// and the outputs are written next to project.json:
//   <name>.webp     2000px long edge, ~250 KB   (lightbox, hero, band)
//   <name>-md.webp   900px, ~90 KB              (cards, portfolio grid, phone hero)
//   <name>-sm.webp   320px, ~16 KB              (filmstrip thumbnails)
// Only cleared projects are built, so unpublished work never enters the public repo.
// Existing outputs are skipped; delete a .webp to rebuild it.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { openEncoder } from "./webp.mjs";

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));
const SIZES = [["", 2000, 250], ["-md", 900, 90], ["-sm", 320, 16]];

function sourceFor(dir, name) {
  for (const ext of [".jpg", ".jpeg", ".png", ".webp"]) if (existsSync(`${dir}/${name}${ext}`)) return `${dir}/${name}${ext}`;
  return null;
}

const enc = await openEncoder();
let built = 0, skipped = 0;
async function make(src, outBase, sizes = SIZES) {
  for (const [suffix, edge, kb] of sizes) {
    const out = `${outBase}${suffix}.webp`;
    if (existsSync(out)) { skipped++; continue; }
    const r = await enc.encode(src, out, edge, kb);
    built++;
    console.log(`  ${out}  ${r.w}x${r.h}  q${r.q}  ${r.kb} KB`);
  }
}

const slugs = only.length ? only : readdirSync("images/projects").filter((d) => existsSync(`images/projects/${d}/project.json`));
for (const slug of slugs) {
  const p = JSON.parse(readFileSync(`images/projects/${slug}/project.json`, "utf8"));
  if (!p.cleared && !force) { console.log(`${slug}: not cleared, skipped`); continue; }
  console.log(slug);
  for (const im of p.images) {
    const name = im.file.replace(/\.webp$/, "");
    const src = sourceFor(`_source/${slug}`, name);
    if (!src) { console.log(`  MISSING source for ${im.file} (expected _source/${slug}/${name}.jpg)`); continue; }
    await make(src, `images/projects/${slug}/${name}`);
  }
}

if (!only.length) {
  // Team photos (square, 640px) and How it works images (portrait, ~1150px)
  for (const f of readdirSync("_source/team")) await make(`_source/team/${f}`, `images/team/${f.replace(/\.[a-z]+$/, "")}`, [["", 640, 50]]);
  for (const f of readdirSync("_source/process")) await make(`_source/process/${f}`, `images/process/${f.replace(/\.[a-z]+$/, "")}`, [["", 1200, 180], ["-md", 700, 70]]);
}
await enc.close();
console.log(`done: ${built} built, ${skipped} already there`);
