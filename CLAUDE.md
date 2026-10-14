# Overyard website: rules for Claude

Lead-generation site for Overyard: plain HTML, CSS and vanilla JS with no framework and no build step. Hosted on GitHub Pages from `main` at https://kimdeegeo.github.io/overyard-website/.

## Goal
A busy US or Australian landscape contractor understands the offer in 10 seconds, trusts us in 30, and takes one action on the first visit: **start a $199 Seed Project** or **book a call**.

## Budget rule
Free tools only: Web3Forms (form), Cal.com or Calendly free (booking link), GitHub Pages (hosting), GA4 and Microsoft Clarity (analytics), WhatsApp click-to-chat, free Google Fonts (self-hosted in `assets/fonts`, OFL licensed). No paid libraries, fonts, plugins or services. Dev tools (Node, Playwright, Lighthouse) are local only and never shipped.

## Files
- `index.html`: home page. Sections are marked with numbered comment banners: header, hero (camera roll), problem, Work, What you receive, How it works, night band, pricing, Evergreen, compare, team, FAQ, contact, footer.
- `privacy.html`, `terms.html`: legal pages with the same header, theme toggle and footer. The header and footer are duplicated, so update all three pages together.
- `css/style.css`: all styling. `@font-face` and both theme blocks are at the top.
- `js/main.js`: the **SITE SETTINGS (`CONFIG`) block at the top** holds every price, credit, window, link, ID, the hero slides, process images, band image, featured slider and the Work `projects` list.
- `images/`: full renders (2000px). `images/cards/` (900px card images), `images/thumbs/` (240px filmstrip), `images/hero-sm/` (1000px phone versions of hero slides), `images/process-0N.webp`.
- `assets/`: logo light/dark, favicons, `fonts/` (woff2 + OFL licenses).
- `scripts/` (dev only): `snapshot.mjs` (version history), `compress.mjs` (WebP via installed Chrome), `serve.mjs` (gzip preview on 8090, use for Lighthouse). `serve.ps1`: no-install preview on 8080.

## No-JS defaults (important)
The HTML contains the **real default text** for every price, count, turnaround and credit (so link previews and crawlers see values, never "a founding price of  with  scope"). `data-cfg`, `data-cfg-money`, `data-cfg-count` (`data-one`/`data-many`), `data-cfg-list`, `data-cfg-percredit`, `data-cfg-if`, `data-cfg-unless` only **update** that text from CONFIG. Empty values hide the element or its nearest `[data-cfg-block]`. When you change a default in CONFIG, also change the matching text in the HTML.
Links that depend on config (booking, sample PDF, portal) ship with `hidden` and no `href`. Never use `href="#"`.

## Version history
Before a significant change: `git tag vN` on the current commit and run `node scripts/snapshot.mjs vN`. Copies and screenshots go to `../overyard-site-history/` (outside the public repo). `../overyard-site-history/compare.html` compares any two versions.

## Brand system: "From the ground up"
Overyard is the bird's-eye plan view every design starts from. The visual signature is a landscape drawing set: title blocks, north arrow, plan symbols, thin rules and mono sheet labels.

- **Theme:** dark by default (`data-theme="dark"` on `<html>`), with a light toggle saved in localStorage key `overyard-theme`. An inline `<head>` script applies the saved theme before paint, and `theme-color` follows it.
- **Tokens:**

  | Token | Dark | Light |
  |---|---|---|
  | `--bg` | `#121512` | `#F5F6F2` |
  | `--paper` | `#1A1E1A` | `#FFFFFF` |
  | `--ink` | `#ECEFE8` | `#141613` |
  | `--muted` | `#A3AB9F` | `#5B6158` |
  | `--line` | `#2F352E` | `#D9DDD3` |
  | `--fern` | `#7FA886` | `#3D5A45` |
  | `--fern-soft` | `#223026` | `#E3EBE3` |
  | `--sage` | `#6E8A69` | `#8FA889` |
  | `--stone` | `#A8957A` | `#725F41` |
  | `--stone-soft` | `#2A251D` | `#EFE7DA` |
  | `--gold` | `#E2B754` | `#7D5D14` |
  | `--gold-soft` | `#352C16` | `#F6EDD6` |
  | `--clay` | `#E08B5E` | `#97502B` |
  | `--clay-soft` | `#3A251B` | `#F5E6DC` |

  The light stone, gold and clay values are darker than the original brief so text passes WCAG AA (4.5:1) on both the page and their tints. Re-check contrast whenever you change a color.
- **Color meaning (fixed):** fern = action and growth (buttons, links); stone = Seed tier; gold = Orchard and value highlights; clay = urgency and important terms only (guarantee, limited spots, deadlines, Old Growth). Never use clay decoratively. Primary buttons are a `--fern` background with `--bg` text.
- **Type:** Bricolage Grotesque 700/800 for headings (tight tracking, `text-wrap: balance`), Manrope 400/500/600 for body (17px, 1.6 line height, ~65ch), JetBrains Mono 400/600 uppercase for labels.
- **Motifs:**
  - mono sheet labels ("L-02 · Work")
  - north arrow in the hero and footer
  - footer styled as a drawing title block with a scale bar
  - dashed stepping-stone path in How it works
- **Plan-symbol glyphs** (in `GLYPHS` in `main.js`): Seed oval (stone), Sprout stem (fern), Grove three circles (fern), Canopy ring with dashed crown (fern), Orchard 2x2 circles (gold), Forest cluster (fern), Old Growth tree rings (clay).
- **Logo:** wordmark whose "O" is a tree-canopy plan symbol (outer ring, dashed crown, center dot). It's inlined in the HTML so it follows the theme. The files are `assets/logo-light.svg` and `logo-dark.svg`, and the favicon is the "O".
- **Motion:** content is always visible (reveals start from a visible resting state). Everything respects `prefers-reduced-motion`.
  - Hero H1 rises in word by word, then a fern drafting line draws under "Win the job." Pure CSS, H1 only. Words start at opacity .01 (not 0) so the headline stays an LCP candidate.
  - Hero camera roll: framed slideshow (day and night renders from `heroSlides`), 6s crossfade with a 1 → 1.05 Ken Burns zoom, filmstrip with mono frame numbers and a progress line, pause/play button, pauses on hover and hidden tab, arrows/swipe/click. Reduced motion: first slide only. Hero is NOT full-bleed.
  - Work: featured "From overhead" PLAN/VIEW slider, bento grid with crop marks, Day/Night toggle when a project has `dayImage` + `nightImage`, 1.04 hover zoom, one-time clip-path wipe.
  - One full-width night band only (after How it works), `bandImage`, 0.85x parallax on desktop only.

## Offer
- **Seed Project:** first project, $199 (was $399), Grove scope, one per company, paid upfront. Refund guarantee: "If the design misses the brief after the included revisions, you get a full refund."
- **Conversion line:** join as a Founding Root within 14 days of delivery to lock founding rates for 6 months; join a membership within 7 days and the $199 is credited to the first month; only 5 founding spots.
- **Single projects:** Sprout $199 (was $349, 1 credit), Grove $399 (was $649, 2 credits, featured "Most popular"), Canopy $799 (was $1,249, 4 credits, walkthrough and takeoff included).
- **Evergreen memberships (monthly):** Orchard $699 (4 credits, takeoffs at $49), Forest $1,299 (8 credits, featured "Best value"), Old Growth $2,399 (16 credits, waitlist).
  - Billed monthly in advance.
  - Unused credits roll over one month, capped at one month's credits.
  - Extra credits at the plan's credit price.
  - 30 days' notice to cancel.
  - Founding rate locked 6 months while active.
- **Add-ons:** takeoff $75 ($49 members), extra round $49, rush +50%, redesign quoted as a new project.
- **Payment:** card or bank transfer via a Wise or Payoneer invoice; first project paid upfront. All prices in USD.
- The live values are always the ones in `CONFIG`. Update this list if they change.

## Business facts (do not change or exaggerate)
- White-label and co-branded landscape design for landscape, hardscape, pool and outdoor-living contractors in the US and Australia.
- **Edmond De Claro**, co-founder and design lead: "Edmond has designed and revised 1,000+ residential landscape projects over 6+ years as a landscape designer and revisionist." Tools (CONFIG.edmondTools): Realtime Landscaping Architect, SketchUp (confirmed by Kim Daryl, Oct 2026), Lumion and D5 Render.
- **Kim Daryl Geolagon**, co-founder, sales and client accounts: licensed civil engineer, 5+ years in construction, currently a remote estimator for a US general contractor. Single point of contact. Prepares material takeoffs.
- Two founders based in the Philippines. **Edmond is the only designer right now.**

## Honesty rules (strict)
- The 1,000+ figure belongs to **Edmond personally**. Never say Overyard delivered 1,000+ projects, and never imply a large team.
- Never use "landscape architect" or "landscape architecture" for us. The software name "Realtime Landscaping Architect" is the only exception.
- No testimonials, client logos, reviews, ratings, client counts or invented statistics.
- None of these may appear anywhere:
  - "free sample render" (replaced by the Seed Project)
  - "Our team does residential landscape design full time"
  - "Edmond leads the design team"
  - "US clients get progress overnight"
  - "These are a few of the projects we can show publicly"
  - "About 7 years"
  - any [City, State] tag
- The time-zone benefit is worded only as: our day overlaps Australian business hours, and US contractors send notes at the end of their day and find progress when they're back on the job.
- Only show projects with `cleared: true`. The founders must confirm image rights before launch.
- The comparison table names no competitors and uses factual wording. The only sourced figure is "Typically $2,200+ per project" for a local designer (lawnstarter.com/blog/cost/landscape-design-price/, typical range $2,200 to $6,180).
- Designs are conceptual. The contractor verifies site conditions, measurements, codes, HOA rules and utilities. No stamped engineering, permit drawings or installation.
- Never show a raw placeholder (`[X]`, `[$___]`, `#`). Values come from config, and elements hide when empty.

## Copy rules
- Short, direct, contractor language. Readable on a phone. No sugar-coating.
- No mention of the Philippines or low cost in the hero. The Philippines appears in Team and the FAQ as a time-zone benefit.
- Primary action everywhere: "Start a $199 Seed Project". Secondary: "Book a call", "See a sample package".
- WhatsApp (+63 976 373 0461) appears in Contact and the footer, never the hero. Social icons (Facebook, Instagram, TikTok, YouTube, LinkedIn) always show; an empty URL renders a muted "Coming soon" icon, not a link. "Client login" shows in the header only when `portalUrl` is set. No portfolio page: "Request the full portfolio" is a form option only.

## Technical rules
- Every image has `width`/`height`. The first hero slide is preloaded (with a 1000px `srcset` for phones). JS-rendered images below the fold use `data-near-src` + `loadWhenNear()` (native lazy loading starts too early on slow phones and competes with the hero). Extra hero slides and thumbnails load after the page `load` event.
- New images: WebP, about 250 KB at 2000px (`node scripts/compress.mjs in out.webp 2000 250`), plus card (900px) and thumb/phone sizes where used.
- Fonts are self-hosted with `font-display: swap` and preloaded. The mono stack falls back to Courier New (same width as JetBrains Mono) so nothing re-wraps when fonts load. Keep CLS at 0.
- `main.js` runs theme, header and camera roll first, then everything else after the first paint (`afterPaint`). Sections use `content-visibility: auto`.
- Lighthouse (local, gzip via `scripts/serve.mjs`) at v3: mobile 97/100/100/100, desktop 100/100/100/100. Keep 90+.
- No 404-probing for optional files. These are switched on by setting their path in `CONFIG`, which keeps the console clean:
  - `samplePackagePdf`, `samplePlan`
  - `walkthroughVideo`
  - each project's `beforeImage`
- Header is sticky at `top: env(safe-area-inset-top)`. The mobile CTA bar respects `env(safe-area-inset-bottom)`.
- Test at 375, 768 and 1280px in both themes. There must be no horizontal page scroll. Lighthouse target is 90+.
- Commit in small steps, with the Co-Authored-By line when the session asks for it. Pushing to `main` publishes the live site.
