# Overyard website

A lead-generation site: plain HTML, CSS and a little JavaScript. There is no build step; the site itself needs nothing installed.
Live at **https://kimdeegeo.github.io/overyard-website/**

```
index.html        Home page. Each section is marked with a numbered comment banner.
portfolio.html    Every cleared project, with filters.
privacy.html      Privacy Policy.
terms.html        Terms.
css/style.css     Styling. Fonts and dark/light theme colors are at the top.
js/main.js        SITE SETTINGS block at the top (prices, ladder, slides, links, IDs), then the scripts.
images/
  projects/<slug>/   One folder per project: project.json + the published WebP images.
  team/              Team photos.
  process/           "How it works" images.
_source/          Full-size originals (NOT in git; back this folder up yourself).
assets/           Logo (light/dark), favicons, fonts/.
scripts/          Dev tools: images.mjs, snapshot.mjs, compress.mjs, serve.mjs (not part of the live site).
CLAUDE.md         Brand, offer, honesty and copy rules (read by Claude in future sessions).
serve.ps1         Local preview server for Windows (no installs needed).
```

> **Back up `_source/`.** It holds every original image, including projects that aren't published yet. It's deliberately kept out of git because the GitHub repo is public.

---

## 1. Preview locally

**No installs:** in PowerShell in this folder, run `powershell -ExecutionPolicy Bypass -File serve.ps1`, then open **http://localhost:8080**.

**With Node.js** (closer to the live site; use this for Lighthouse): run `npm run serve`, then open **http://localhost:8090**.

Open the site through one of these servers, not by double-clicking the file: the project pages load their `project.json` files, which browsers block on `file://`.

First time on a new computer: install [Node.js LTS](https://nodejs.org), then run `npm install` in this folder.

---

## 2. Projects

### Folder structure
Each project has its own folder, named with a lowercase-hyphen slug:

```
images/projects/pool-courtyard-citrus/
  project.json               details and captions (see below)
  courtyard-day.webp         2000px wide, ~250 KB  (lightbox, hero, band)
  courtyard-day-md.webp      900px wide, ~90 KB    (cards, phones)
  courtyard-day-sm.webp      320px wide, ~16 KB    (filmstrip thumbnails)
  ...
_source/pool-courtyard-citrus/
  courtyard-day.jpg          the full-size original (any jpg / png / webp)
```

### project.json fields
```json
{
  "title": "Pool courtyard and citrus grove",
  "region": "",
  "summary": "One or two sentences about the project.",
  "category": ["pool", "outdoor-living", "planting"],
  "cleared": true,
  "featured": true,
  "cover": "courtyard-day.webp",
  "coverNight": "courtyard-night.webp",
  "images": [
    { "file": "plan-sheet.webp", "caption": "2D plan sheet", "alt": "Description for screen readers", "time": "plan" },
    { "file": "courtyard-day.webp", "caption": "Courtyard overview", "alt": "…", "time": "day" }
  ]
}
```

| Field | Meaning |
|---|---|
| `title`, `summary` | Shown on the card |
| `region` | A state or region (e.g. "TX", "VIC"), or `""`. **Never an address.** |
| `category` | Any of `pool`, `outdoor-living`, `hillside`, `planting`, `front-yard`. Drives the portfolio filters. |
| `cleared` | `true` only once you've confirmed you're allowed to show it. **`false` = hidden everywhere.** |
| `featured` | `true` = eligible for the home page (up to 5, in the order of `projects` in `js/main.js`) |
| `cover` / `coverNight` | Card image. Set `coverNight` to give the card a Day / Night toggle. |
| `images` | The sheets. `time` is `day`, `night`, `plan`, `model` or `photo` (site photo). The gallery shows photo → plans → model → renders. `night` images also put the project under the Night filter. |

### Add a new project
1. Pick a slug, e.g. `hilltop-pool`.
2. Put the full-size images in `_source/hilltop-pool/`, named the way you want them on the site (`pool-day.jpg`, `pool-night.jpg`, `plan.jpg`…).
3. Create `images/projects/hilltop-pool/project.json` (copy one from another project), list each image as `"file": "pool-day.webp"` with a caption, alt text and time, and set `"cleared": true` once it's approved.
4. Run `node scripts/images.mjs hilltop-pool` to make the three WebP sizes.
5. Add `"hilltop-pool"` to `projects` in `js/main.js` (the list order is the display order).
6. Preview, then commit and push.

### Feature a project on the home page
Set `"featured": true` in its project.json. The home page shows up to 5 featured, cleared projects, in the order of the `projects` list. The first one gets the large card. Set `"featured": false` on another project if you want to swap one out.

### Hide or publish a project
Set `"cleared": false` to hide a project everywhere, or `true` to publish it. For a newly cleared project:
1. Run `node scripts/images.mjs <slug>` so its images exist.
2. Set `"featured": true` if it should be on the home page.
3. Commit and push.

### Hero camera roll, night band, featured slider
- **Hero slides:** `heroSlides` in `js/main.js`.
  - Each `src` is a project image's 2000px file; the `-md` and `-sm` versions next to it are used automatically.
  - Start with a night render and alternate day and night.
  - Only use cleared projects.
  - If you change the **first** slide, also update the two image paths near the top of `index.html` (the `preload` link and the first `<img class="roll-img">`).
- **Night band:** `bandImage`.
- **"From overhead" PLAN / VIEW slider:** `featured` (`project`, `plan`, `view`).
- **"What you receive":** `receive`.

### How it works images and team photos
- **Process images:** originals go in `_source/process/`, and `processImages` in `js/main.js` lists the outputs.
- **Team photos:** square originals go in `_source/team/` (e.g. `alfred.jpg`); `node scripts/images.mjs` makes `images/team/alfred.webp`. The team cards themselves are written in `index.html` (search `11. WHO YOU'LL WORK WITH`):
  - **Alfred:** replace the `AG` monogram with the `<img>` line given in the comment there.
  - **Alejandro:** update his bio from his CV (marked `TODO update from CV`).

Running `node scripts/images.mjs` with no arguments builds everything that's missing: all cleared projects, team and process. Existing files are skipped; delete one to rebuild it.

---

## 3. Prices and the price ladder

Everything is in `js/main.js`:

- **`priceLadder`:** one row per member tier. New clients pay the tier they join in:

  | Members | Seed | Sprout | Grove | Canopy | Orchard | Forest | Old Growth |
  |---|---|---|---|---|---|---|---|
  | 1–5 (founding) | 199 | 199 | 399 | 799 | 699 | 1,299 | 2,399 |
  | 6–10 | 229 | 229 | 459 | 919 | 799 | 1,499 | 2,759 |
  | 11–20 | 265 | 259 | 529 | 1,059 | 919 | 1,729 | 3,179 |
  | 21+ (regular) | 325 | 349 | 649 | 1,249 | 1,099 | 1,999 | 3,699 |

- **`membersSoFar`:** **update this as you sign members.** It picks the current tier, "Spots left" (5 − members) and the "Next price" line. The last row is the regular list price, shown struck through while a lower tier applies.
- **`foundingDeadline`:** `"2027-04-30"`. After this date the founding tier ends even if spots remain.
- **`foundingLockMonths`:** how long founding members keep founding rates (6).
- **`nextPriceKeys`:** which prices the "Next price" line mentions (Grove, Orchard, Forest).
- **`packages`:** credits, deliverables and turnaround for Sprout / Grove / Canopy.
- **`memberships`:** credits and `activeProjects` (fair use) for Orchard / Forest / Old Growth.
- **`sizeGuide`, `canopyPlus`:** the project size table under the package cards.
- **`addons`, `seed`, `currencyNote`.**

The page HTML also contains the founding-tier numbers as default text (for link previews and search engines). If you change the **founding** prices, update the same numbers in `index.html` too. Search for the old number.

Other settings: `email`, `bookingUrl`, `web3formsKey`, `replyHours`, `callMinutes`, `whatsapp`, `portalUrl`, the five social URLs, `ga4Id`, `clarityId`, `edmondTools`, `samplePackagePdf`, `walkthroughVideo`. Leave any of them `""` to hide what depends on it.

## 4. WhatsApp, social links and client login

- **WhatsApp** shows in Contact and the footer: `whatsapp.display` and `whatsapp.url` (`https://wa.me/` + digits only).
- **Social icons** (Facebook, Instagram, TikTok, YouTube, LinkedIn) always show. Empty URLs are muted "Coming soon" icons; paste a link to make one live.
- **Client login**: set `portalUrl` and the header link appears on every page.

## 5. Connect the contact form (Web3Forms, free)

1. Go to [web3forms.com](https://web3forms.com), enter the inbox that should receive leads, and copy the **access key**.
2. Paste it into `web3formsKey` in `js/main.js`.
3. Push, then send a test from the live site (check spam the first time).

Until a key is set, the form says it isn't connected and points people to WhatsApp. Buttons on other pages pre-select the form option through the link, e.g. `index.html?topic=portfolio#contact`.

## 6. Connect booking (Cal.com or Calendly, free)

Create a 20-minute event and paste its public link into `bookingUrl`. "Book a call" buttons appear and open it in a new tab.

## 7. Theme, colors and fonts

- Dark is the default; visitors can switch to light, and the choice is remembered.
- Colors are the two theme blocks at the top of `css/style.css`. Keep the color meanings (fern = action, stone = Seed, gold = Orchard/value, clay = urgency) and re-check contrast if you change a shade.
- Fonts: Bricolage Grotesque, Manrope, JetBrains Mono. Free Google Fonts, self-hosted in `assets/fonts/` (licenses included).

## 8. Version history and snapshots

Before a big change:

```
git tag v5
node scripts/snapshot.mjs v5
```

This copies the site into `../overyard-site-history/v5/site/` and takes full-page screenshots of the home page and the portfolio at 1440px and 390px, dark and light. Open `../overyard-site-history/compare.html` to compare any two versions side by side.

## 9. Check speed and quality (Lighthouse)

```
npm run serve
npx lighthouse http://localhost:8090/ --view
```

Add `--preset=desktop` for desktop, or `portfolio.html` to the URL for the portfolio page. At v4: home mobile ~92 / 100 / 100 / 100, desktop 100 / 100 / 100 / 100 (performance / accessibility / best practices / SEO).

## 10. Publish (GitHub Pages)

```
git add -A
git commit -m "Describe the change"
git push
```

The live site updates within a minute or two.

## 11. Connect a custom domain later

1. Buy a domain (e.g. `overyard.com`).
2. GitHub: **Settings → Pages → Custom domain**, enter it and save.
3. At your registrar:
   - apex: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: a `CNAME` to `kimdeegeo.github.io`
4. Wait for DNS, then tick **Enforce HTTPS**.
5. Replace `https://kimdeegeo.github.io/overyard-website/` with the new domain in the `<head>` of all four pages (canonical, `og:url`, `og:image`, `twitter:image`) and in `SITE_URL` in `js/main.js`.
