// Overyard site snapshot
//
//   node scripts/snapshot.mjs v3
//
// 1. Copies the site files for that version into ../overyard-site-history/<version>/site/
//    (from the git tag if it exists, otherwise from the current working tree).
// 2. Serves that copy locally and takes full-page screenshots with your installed
//    Google Chrome at 1440px and 390px wide, in dark and light themes,
//    into ../overyard-site-history/<version>/screens/.
// 3. Rebuilds ../overyard-site-history/compare.html to compare any two versions.
//
// The history folder lives OUTSIDE the repo on purpose: the GitHub repo is public.

import { execSync } from "node:child_process";
import { createServer } from "node:http";
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const version = process.argv[2];
if (!version || !/^[\w.-]+$/.test(version)) {
  console.error("Usage: node scripts/snapshot.mjs <version>   e.g. node scripts/snapshot.mjs v3");
  process.exit(1);
}

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const historyRoot = resolve(repo, "..", "overyard-site-history");
const outDir = join(historyRoot, version);
const siteDir = join(outDir, "site");
const screensDir = join(outDir, "screens");

const VIEWS = [
  { width: 1440, height: 900, theme: "dark" },
  { width: 1440, height: 900, theme: "light" },
  { width: 390, height: 844, theme: "dark" },
  { width: 390, height: 844, theme: "light" },
];

// ---------- 1. Copy the site files ----------
function sh(cmd) { return execSync(cmd, { cwd: repo, stdio: ["ignore", "pipe", "pipe"] }).toString().trim(); }

rmSync(siteDir, { recursive: true, force: true });
mkdirSync(siteDir, { recursive: true });
mkdirSync(screensDir, { recursive: true });

let tagExists = false;
try { sh(`git rev-parse -q --verify "refs/tags/${version}"`); tagExists = true; } catch { /* no tag */ }

if (tagExists) {
  // git archive gives exactly what was committed at that tag
  execSync(`git archive "${version}" | tar -x -C "${siteDir.replace(/\\/g, "/")}"`, { cwd: repo, shell: "bash" });
  console.log(`Copied files from git tag ${version}`);
} else {
  for (const file of sh("git ls-files").split(/\r?\n/).filter(Boolean)) {
    const from = join(repo, file);
    if (!existsSync(from)) continue;
    mkdirSync(dirname(join(siteDir, file)), { recursive: true });
    cpSync(from, join(siteDir, file));
  }
  console.log(`No tag "${version}" yet: copied the current working tree`);
}

// ---------- 2. Serve the copy and screenshot it ----------
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".ico": "image/x-icon", ".pdf": "application/pdf", ".mp4": "video/mp4", ".json": "application/json" };

const server = createServer((req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path.endsWith("/")) path += "index.html";
  const file = resolve(siteDir, "." + path);
  if (!file.startsWith(siteDir) || !existsSync(file) || statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { "Content-Type": TYPES[extname(file).toLowerCase()] || "application/octet-stream" });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}/`;

const browser = await chromium.launch({ channel: "chrome" });
try {
  // Pages to capture (portfolio.html exists from v4). File names: 1440-dark-01.png, portfolio-1440-dark-01.png
  const PAGES = ["", "portfolio.html"].filter((pg) => existsSync(join(siteDir, pg || "index.html")));
  for (const pg of PAGES) for (const v of VIEWS) {
    const context = await browser.newContext({
      viewport: { width: v.width, height: v.height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",           // static, comparable screenshots
      isMobile: v.width < 600,
      hasTouch: v.width < 600,
    });
    await context.addInitScript((theme) => {
      try { theme === "light" ? localStorage.setItem("overyard-theme", "light") : localStorage.removeItem("overyard-theme"); } catch (e) {}
    }, v.theme);
    const page = await context.newPage();
    await page.goto(base + pg, { waitUntil: "load", timeout: 30000 });
    // Render every section for the capture (the site skips off-screen sections
    // with content-visibility, which would otherwise come out blank)
    await page.addStyleTag({ content: "main > *, main > .section, main > .band { content-visibility: visible !important; }" });

    // Scroll through the page so lazy images load, then return to the top
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
    // Wait for visible images still loading (hidden ones, e.g. the other theme's hero, never load)
    await page.evaluate(() => Promise.race([
      Promise.all([...document.images].filter((i) => !i.complete && i.offsetParent !== null)
        .map((i) => new Promise((r) => { i.onload = i.onerror = r; }))),
      new Promise((r) => setTimeout(r, 8000)),
    ]));
    await page.waitForTimeout(400);

    // Chrome can't capture images taller than ~16,384px (taller pages wrap),
    // so capture in chunks: 1440-dark-01.png, 1440-dark-02.png, ...
    const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const CHUNK = 8000;
    const prefix = (pg ? pg.replace(".html", "") + "-" : "") + `${v.width}-${v.theme}`;
    for (const f of readdirSync(screensDir)) if (f.startsWith(prefix + "-") && /^d+.png$/.test(f.slice(prefix.length + 1))) rmSync(join(screensDir, f));
    let part = 1;
    for (let y = 0; y < fullHeight; y += CHUNK, part++) {
      const name = `${prefix}-${String(part).padStart(2, "0")}.png`;
      await page.screenshot({ path: join(screensDir, name), fullPage: true,
        clip: { x: 0, y, width: v.width, height: Math.min(CHUNK, fullHeight - y) } });
    }
    console.log(`  ${version}/screens/${prefix} (${part - 1} part${part > 2 ? "s" : ""}, ${fullHeight}px)`);
    await context.close();
  }
} finally {
  await browser.close();
  server.close();
}

// ---------- 3. Rebuild compare.html ----------
const versions = readdirSync(historyRoot)
  .filter((d) => existsSync(join(historyRoot, d, "screens")) && readdirSync(join(historyRoot, d, "screens")).some((f) => f.endsWith(".png")))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
const views = ["", "portfolio-"].flatMap((pre) => VIEWS.map((v) => `${pre}${v.width}-${v.theme}`));
// Which screenshot parts exist for each version and view
const manifest = {};
for (const ver of versions) {
  const files = readdirSync(join(historyRoot, ver, "screens")).filter((f) => f.endsWith(".png")).sort();
  manifest[ver] = {};
  for (const view of views) manifest[ver][view] = files.filter((f) => f === `${view}.png` || (f.startsWith(`${view}-`) && /^d+.png$/.test(f.slice(view.length + 1))));
}

writeFileSync(join(historyRoot, "compare.html"), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Overyard site versions</title>
<style>
  :root { --bg:#121512; --paper:#1A1E1A; --ink:#ECEFE8; --muted:#A3AB9F; --line:#2F352E; --fern:#7FA886; }
  * { box-sizing: border-box; }
  body { margin: 0; font: 15px/1.5 system-ui, sans-serif; background: var(--bg); color: var(--ink); }
  header { position: sticky; top: 0; z-index: 2; display: flex; flex-wrap: wrap; gap: 12px 20px; align-items: center;
    padding: 12px 16px; background: var(--paper); border-bottom: 1px solid var(--line); }
  h1 { font-size: 15px; margin: 0 12px 0 0; }
  label { display: flex; gap: 8px; align-items: center; color: var(--muted); font-size: 13px; }
  select { background: var(--bg); color: var(--ink); border: 1px solid var(--line); border-radius: 6px; padding: 6px 8px; font: inherit; }
  .sync { margin-left: auto; }
  main { display: grid; grid-template-columns: 1fr 1fr; height: calc(100vh - 57px); }
  .pane { overflow: auto; border-right: 1px solid var(--line); }
  .pane:last-child { border-right: 0; }
  .pane-head { position: sticky; top: 0; padding: 6px 12px; background: var(--bg); color: var(--fern);
    font: 600 12px/1.4 ui-monospace, Consolas, monospace; letter-spacing: .06em; text-transform: uppercase; border-bottom: 1px solid var(--line); }
  .pane img { display: block; width: 100%; height: auto; margin: 0 auto; }
  .pane.narrow img { max-width: 390px; }
  .missing { padding: 40px 16px; color: var(--muted); }
</style>
</head>
<body>
<header>
  <h1>Overyard site versions</h1>
  <label>Left <select id="a"></select></label>
  <label>Right <select id="b"></select></label>
  <label>View <select id="view"></select></label>
  <label class="sync"><input type="checkbox" id="sync" checked> Sync scrolling</label>
</header>
<main>
  <section class="pane" id="paneA"></section>
  <section class="pane" id="paneB"></section>
</main>
<script>
  // Generated by scripts/snapshot.mjs. Re-run the script to add new versions.
  const VERSIONS = ${JSON.stringify(versions)};
  const VIEWS = ${JSON.stringify(views)};
  const FILES = ${JSON.stringify(manifest)};
  const $ = (id) => document.getElementById(id);
  VERSIONS.forEach((v) => { $("a").add(new Option(v, v)); $("b").add(new Option(v, v)); });
  VIEWS.forEach((v) => $("view").add(new Option(v.replace(/^portfolio-/, "Portfolio · ").replace(/(d+)-/, "$1px · "), v)));
  $("a").value = VERSIONS[Math.max(0, VERSIONS.length - 2)] || "";
  $("b").value = VERSIONS[VERSIONS.length - 1] || "";

  function fill(pane, version) {
    const view = $("view").value;
    pane.classList.toggle("narrow", view.startsWith("390"));
    pane.innerHTML = '<div class="pane-head">' + version + " · " + view + "</div>";
    const parts = (FILES[version] && FILES[version][view]) || [];
    if (!parts.length) { pane.insertAdjacentHTML("beforeend", '<p class="missing">No screenshot for this view.</p>'); return; }
    parts.forEach((file, i) => {
      const img = new Image();
      img.alt = "Overyard " + version + " at " + view + (parts.length > 1 ? " (part " + (i + 1) + ")" : "");
      img.src = version + "/screens/" + file;
      pane.appendChild(img);
    });
  }
  function render() { fill($("paneA"), $("a").value); fill($("paneB"), $("b").value); }
  ["a", "b", "view"].forEach((id) => $(id).addEventListener("change", render));

  // Synced scrolling by position ratio (works even if pages differ in length)
  let lock = false;
  function link(from, to) {
    from.addEventListener("scroll", () => {
      if (!$("sync").checked || lock) return;
      lock = true;
      const ratio = from.scrollTop / Math.max(1, from.scrollHeight - from.clientHeight);
      to.scrollTop = ratio * (to.scrollHeight - to.clientHeight);
      requestAnimationFrame(() => { lock = false; });
    });
  }
  link($("paneA"), $("paneB")); link($("paneB"), $("paneA"));
  render();
</script>
</body>
</html>
`);
console.log(`compare.html updated (${versions.join(", ")})`);
console.log(`Snapshot saved to ${outDir}`);
