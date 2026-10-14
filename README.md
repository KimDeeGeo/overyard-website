# Overyard website

A lead-generation site: plain HTML, CSS and a little JavaScript. There is no build step; the site itself needs nothing installed.
Live at **https://kimdeegeo.github.io/overyard-website/**

```
index.html        Home page. Each section is marked with a numbered comment banner.
privacy.html      Privacy Policy.
terms.html        Terms.
css/style.css     Styling. Fonts and dark/light theme colors are at the top.
js/main.js        SITE SETTINGS block at the top (prices, slides, projects, links, IDs), then the site's scripts.
images/           Renders (2000px) plus cards/ (900px), thumbs/ (240px), hero-sm/ (1000px phone versions).
assets/           Logo (light/dark), favicons, fonts/ (self-hosted, free OFL fonts).
scripts/          Dev tools: snapshot.mjs, compress.mjs, serve.mjs (not part of the live site).
CLAUDE.md         Brand, offer, honesty and copy rules (read by Claude in future sessions).
serve.ps1         Local preview server for Windows (no installs needed).
```

---

## 1. Preview locally

**No installs:** open PowerShell in this folder and run:

```
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Then open **http://localhost:8080**. Press `Ctrl+C` to stop.

**With Node.js** (closer to the live site, compressed like GitHub Pages; use this for Lighthouse):

```
npm run serve
```

Then open **http://localhost:8090**.

---

## 2. Edit the settings

Open `js/main.js`. Everything you're likely to change is in the **SITE SETTINGS** block at the top. Leave a value empty (`""`) or `0` and whatever uses it is hidden, so placeholder text never shows.

The page HTML already contains the default values (so link previews and search engines see real prices). If you change a price or count in the settings, the page updates for visitors automatically; also update the matching text in `index.html` so previews match.

| Setting | What it controls |
|---|---|
| `email` | Shown as plain text in Contact, the footer and the legal pages |
| `bookingUrl` | Cal.com or Calendly link. "Book a call" buttons appear and open it in a new tab |
| `web3formsKey` | Turns the contact form on (section 5) |
| `replyHours`, `callMinutes` | "Kim Daryl replies within 12 hours", "Book a 20-minute call" |
| `whatsapp` | `display` (the number shown) and `url` (the `wa.me` link) |
| `portalUrl` | "Client login" link in the header (hidden while empty) |
| `facebookUrl`, `instagramUrl`, `tiktokUrl`, `youtubeUrl`, `linkedinUrl` | Social icons (see section 4) |
| `ga4Id`, `clarityId` | Analytics. Scripts only load when set |
| `edmondTools` | Edmond's tools line in the Team section and FAQ |
| `foundingSpots`, `rateLockMonths`, `seedJoinWindowDays`, `seedCreditDays` | The founding / conversion line |
| `seed`, `packages`, `memberships`, `addons`, `currencyNote` | All prices, credits, deliverables and turnaround |
| `heroSlides`, `heroInterval` | The hero camera roll (section 3) |
| `bandImage` | The full-width night band after How it works |
| `processImages` | The four How it works images |
| `featured` | The "From overhead" PLAN / VIEW slider in Work |
| `projects` | The Work cards and galleries |
| `samplePackagePdf` | Shows "See a sample package" in the hero once set |
| `samplePlan`, `receiveProject` | Images in "What you receive" |
| `walkthroughVideo`, `walkthroughPoster` | Optional video under Work |

## 3. Images

Compress new images first. With Node installed, `scripts/compress.mjs` resizes and converts anything to WebP using your installed Chrome:

```
node scripts/compress.mjs input.jpg images/name.webp 2000 250
```

(arguments: input, output, max width, max size in KB). Without Node, [squoosh.app](https://squoosh.app) does the same in the browser.

### Hero camera roll (day and night slides)
Each slide in `heroSlides` has:
- `src`: the full render, 2000px wide, about 250 KB (`images/…`)
- `small`: a 1000px copy for phones (`images/hero-sm/…`, about 90 KB)
- `thumb`: a 240px filmstrip thumbnail (`images/thumbs/…`, about 10 KB)
- `time`: `"day"` or `"night"` (shown as D / N on the filmstrip)
- `label`: the sheet label in the corner, e.g. `"Sheet R-07 · 3D render · Lakeside · Night"`
- `alt`, `w`, `h`: description and pixel size

To add one: make the three sizes, then copy a `{ … }` line in `heroSlides`. Keep the first slide a night render and alternate day and night. **If you change the first slide**, also change the two `modern-02` paths near the top of `index.html` (the `preload` link and the first `<img>`). Only use renders from cleared projects.

### Work projects (day / night cards)
Each project in `projects` has `name`, `line`, `cleared`, `dayImage`, `nightImage`, `cardW`, `cardH`, `images` and an optional `beforeImage`.
- **Only projects with `cleared: true` are shown.** Confirm you have the right to show every image before launch.
- `dayImage` / `nightImage`: 900px card images in `images/cards/`. Set both and the card gets a Day / Night toggle; leave `nightImage: ""` for no toggle.
- `images`: the full gallery opened by "View sheets". Mark the plan view with `plan: true` and a site photo with `photo: true`.
- The first project is the large card.
- **Before/after:** save the site photo (same framing as the first render) and set `beforeImage`; the gallery then opens on a drag-to-compare slider.

### How it works images
`processImages` lists `images/process-01.webp` to `process-04.webp` (portrait, about 4:5). Replace a file to change it. Set an entry to `""` and that card shows a plan-symbol drawing instead.

### Night band
`bandImage` is the background of the full-width band after How it works. Use a night render at least 2000px wide; the left side gets a dark overlay for the text.

### Founder photos
`images/founder-edmond.jpg` and `images/founder-kim.jpg` (square, about 640px).

## 4. WhatsApp, social links and client login

- **WhatsApp** shows in the contact section and the footer and opens a chat in a new tab. Change `whatsapp.display` and `whatsapp.url` (`https://wa.me/` + the number with country code, digits only).
- **Social icons** (Facebook, Instagram, TikTok, YouTube, LinkedIn) always show. While a URL is empty the icon is muted with a "Coming soon" tooltip and isn't clickable. Paste a profile link into e.g. `instagramUrl` and it becomes a real link.
- **Client login**: paste your portal address into `portalUrl` and a "Client login" link appears in the header of every page.

## 5. Connect the contact form (Web3Forms, free)

1. Go to [web3forms.com](https://web3forms.com), enter the inbox that should receive leads, and copy the **access key**.
2. Paste it into `web3formsKey` in `js/main.js`.
3. Push, then send a test from the live site (check spam the first time).

The key is safe in public code because it can only send to your inbox. A hidden "botcheck" field filters basic spam bots. Until a key is set, the form says it isn't connected and points people to WhatsApp.

## 6. Connect booking (Cal.com or Calendly, free)

Create a 20-minute event, copy its public link, and paste it into `bookingUrl`. "Book a call" buttons appear (Work, night band, Contact) and open it in a new tab.

## 7. Theme, colors and fonts

- Dark is the default. Visitors can switch to light with the sun/moon button, and the choice is remembered.
- Colors are the two theme blocks at the top of `css/style.css`. Keep the color meanings (fern = action, stone = Seed, gold = Orchard/value, clay = urgency) and re-check contrast if you change a shade.
- Fonts: Bricolage Grotesque (headings), Manrope (body), JetBrains Mono (labels). Free Google Fonts, self-hosted in `assets/fonts/` for speed (licenses included).

## 8. Version history and snapshots

Before a big change, save a snapshot of the current version (needs Node.js; uses your installed Chrome):

```
git tag v4
node scripts/snapshot.mjs v4
```

This copies the site into `../overyard-site-history/v4/site/` and takes full-page screenshots at 1440px and 390px wide, in dark and light, into `../overyard-site-history/v4/screens/`. The history folder sits **next to** this repo, not inside it, because the GitHub repo is public.

Open `../overyard-site-history/compare.html` in a browser to compare any two versions side by side (pick them from the dropdowns; scrolling is synced).

First-time setup on a new computer: install [Node.js LTS](https://nodejs.org), then in this folder run `npm install`.

## 9. Check speed and quality (Lighthouse)

```
npm run serve
npx lighthouse http://localhost:8090/ --view
```

Add `--preset=desktop` for the desktop score. At v3: mobile 97 / 100 / 100 / 100, desktop 100 / 100 / 100 / 100 (performance / accessibility / best practices / SEO).

## 10. Publish (GitHub Pages)

The site deploys automatically from `main`:

```
git add -A
git commit -m "Describe the change"
git push
```

The live site updates within a minute or two (Settings → Pages → Deploy from a branch → main / root).

## 11. Connect a custom domain later

1. Buy a domain (e.g. `overyard.com`) from any registrar.
2. In GitHub: **Settings → Pages → Custom domain**, enter it and save. GitHub adds a `CNAME` file to the repo.
3. At your registrar, add DNS records:
   - apex domain: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: a `CNAME` to `kimdeegeo.github.io`
4. Wait for DNS (minutes to a few hours), then tick **Enforce HTTPS**.
5. Replace `https://kimdeegeo.github.io/overyard-website/` with the new domain in the `<head>` of all three pages (canonical, `og:url`, `og:image`, `twitter:image`) and in `SITE_URL` in `js/main.js`.
