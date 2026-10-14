# Overyard website

A lead-generation site: plain HTML, CSS and a little JavaScript. There is no build step and nothing to install.
Live at **https://kimdeegeo.github.io/overyard-website/**

```
index.html        Home page. Each section is marked with a numbered comment banner.
privacy.html      Privacy Policy.
terms.html        Terms.
css/style.css     Styling. Dark and light theme colors are at the top.
js/main.js        SITE SETTINGS block at the top (prices, projects, links, IDs), then the site's scripts.
images/           Renders and founder photos.
assets/           Logo (light/dark), favicons, and later sample-package.pdf.
CLAUDE.md         Brand, offer, honesty and copy rules (read by Claude in future sessions).
serve.ps1         Local preview server for Windows.
```

---

## 1. Preview locally

Open PowerShell in this folder and run:

```
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Then open **http://localhost:8080**. Press `Ctrl+C` to stop.

---

## 2. Edit the settings

Open `js/main.js`. Everything you're likely to change is in the **SITE SETTINGS** block at the top. Leave a value empty (`""`) or `0` and whatever uses it is hidden, so placeholder text never shows.

| Setting | What it controls |
|---|---|
| `email` | Shown as plain text in Contact, the footer and the legal pages |
| `bookingUrl` | Cal.com or Calendly link. Every "Book a call" button opens it in a new tab |
| `web3formsKey` | Turns the contact form on (section 4) |
| `replyHours`, `callMinutes` | "Kim Daryl replies within 12 hours", "Book a 20-minute call" |
| `ga4Id`, `clarityId` | Analytics. Scripts only load when set |
| `linkedinUrl`, `instagramUrl`, `facebookUrl` | Footer links (hidden when empty) |
| `foundingSpots`, `rateLockMonths`, `seedJoinWindowDays`, `seedCreditDays` | The founding / conversion line |
| `seed` | Seed Project price, struck-through price, scope and guarantee |
| `packages` | Sprout, Grove, Canopy: prices, credits, plan, renders, video, rounds, takeoff, turnaround |
| `memberships` | Orchard, Forest, Old Growth: prices, credits, perks, `status: "waitlist"` |
| `addons` | Takeoff (and member price), extra round, rush, redesign |
| `currencyNote` | "All prices in USD." |
| `samplePackagePdf` | Shows "See a sample package" in the hero once set |
| `heroBefore` | Turns the hero into a before/after slider |
| `samplePlan`, `receiveProject` | Images used in "What you receive" |
| `walkthroughVideo`, `walkthroughPoster` | Optional video under Work |
| `projects` | The Work section (section 3) |

Turnaround and revision ranges, "From $199" and credit mixes are worked out from these values automatically.

## 3. Projects and images

- **Work projects** live in `CONFIG.projects`. Each has a `name`, a one-line `line`, `images` (first = card cover, `plan: true` = plan view) and an optional `beforeImage`.
- **Only projects with `cleared: true` are shown.** Confirm you have the right to show every image before launch, and set `cleared: false` on any you can't.
- **Add a project:** copy one `{ … }` block in `projects`, change the text and image paths, and put the files in `/images`.
- **Before/after slider:** save the site photo (e.g. `images/project-01-before.webp`, same framing as the first render) and set that project's `beforeImage`. For the hero, save `images/hero-before.webp` and set `heroBefore`.
- **Hero images:** dark mode shows `images/modern-02.webp` (night) and light mode `images/hero-01.webp` (day). Swap them by replacing the files, or change the paths in `index.html`.
- **Founder photos:** `images/founder-edmond.jpg` and `images/founder-kim.jpg` (square, about 640px). To add WebP versions, save `founder-edmond.webp` / `founder-kim.webp` and uncomment the `<source>` lines in `index.html`.
- **Sample package:** save it as `assets/sample-package.pdf` and set `samplePackagePdf: "assets/sample-package.pdf"`.
- Keep images under about 500 KB and 2000px wide. [squoosh.app](https://squoosh.app) compresses them for free.

## 4. Connect the contact form (Web3Forms, free)

1. Go to [web3forms.com](https://web3forms.com), enter the inbox that should receive leads, and copy the **access key**.
2. Paste it into `web3formsKey` in `js/main.js`.
3. Push, then send a test from the live site (check spam the first time).

The key is safe in public code because it can only send to your inbox. A hidden "botcheck" field filters basic spam bots. Until a key is set, the form says it isn't connected and sends nothing.

## 5. Connect booking (Cal.com or Calendly, free)

Create a 20-minute event, copy its public link, and paste it into `bookingUrl`. "Book a call" buttons appear and open it in a new tab.

## 6. Theme, colors and fonts

- Dark is the default. Visitors can switch to light with the sun/moon button, and the choice is remembered.
- Colors are the two theme blocks at the top of `css/style.css`. Keep the color meanings (fern = action, stone = Seed, gold = Orchard/value, clay = urgency) and re-check contrast if you change a shade.
- Fonts: Bricolage Grotesque (headings), Manrope (body), JetBrains Mono (labels), all free from Google Fonts.

## 7. Publish (GitHub Pages)

The site deploys automatically from `main`:

```
git add -A
git commit -m "Describe the change"
git push
```

The live site updates within a minute or two (Settings → Pages → Deploy from a branch → main / root).

## 8. Connect a custom domain later

1. Buy a domain (e.g. `overyard.com`) from any registrar.
2. In GitHub: **Settings → Pages → Custom domain**, enter it and save. GitHub adds a `CNAME` file to the repo.
3. At your registrar, add DNS records:
   - apex domain: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: a `CNAME` to `kimdeegeo.github.io`
4. Wait for DNS (minutes to a few hours), then tick **Enforce HTTPS**.
5. Replace `https://kimdeegeo.github.io/overyard-website/` with the new domain in the `<head>` of all three pages (canonical, `og:url`, `og:image`, `twitter:image`) and in `SITE_URL` in `js/main.js`.
