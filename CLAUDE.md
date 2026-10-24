# Overyard website: rules for Claude

Lead-generation site for Overyard: plain HTML, CSS and vanilla JS with no framework and no build step. Hosted on GitHub Pages from `main` at **https://overyarddesign.com** (custom domain via the `CNAME` file; HTTPS on). Brand name on the page is always "Overyard"; only the web address and email use "overyarddesign". Contact email: sales@overyarddesign.com (`CONFIG.email`).

## Goal
A busy US or Australian landscape contractor understands the offer in 10 seconds, trusts us in 30, and takes one action on the first visit: **start a $199 Seed Project** or **book a call**.

## Budget rule
Free tools only: Web3Forms (form), Cal.com or Calendly free (booking link), GitHub Pages (hosting), GA4 and Microsoft Clarity (analytics), WhatsApp click-to-chat, free Google Fonts (self-hosted in `assets/fonts`, OFL licensed). No paid libraries, fonts, plugins or services. No AI chatbot. Dev tools (Node, Playwright, Lighthouse) are local only and never shipped.

## Files
- `index.html`: home page. Numbered comment banners: header, hero (camera roll), problem, Work, What you receive, Takeoffs, How it works, night band, pricing (founding offer, Seed, packages, size guide), Evergreen, compare, team, FAQ, contact, footer.
- `portfolio.html`: every cleared project, filter chips, bento grid, lightbox.
- `privacy.html`, `terms.html`: legal pages.
- `404.html`: not-found page (GitHub Pages serves it for any missing address, at any depth, so all its paths start with `/`). `noindex`.
- The header and footer are duplicated in all five pages (including `404.html`), so update them together.
- `css/style.css`: all styling. `@font-face` and both theme blocks are at the top.
- `js/main.js`: the **SITE SETTINGS (`CONFIG`) block at the top**: contact, socials, team tools, the **price ladder**, packages, size guide, memberships, add-ons, the list of project folders, hero slides, band, process images, What you receive, featured slider.
- `images/projects/<slug>/`: one folder per project, with `project.json` plus `<name>.webp` (2000px), `<name>-md.webp` (900px) and `<name>-sm.webp` (320px).
- `images/team/<name>.webp` (640px square) and `images/process/<name>.webp` (+ `-md`).
- `_source/` (**git-ignored**): full-size originals in `_source/projects/<slug>/<name>.(png|jpg)`, plus `team/` and `process/`. Old v4 originals are archived in `../overyard-archive/`.
- `assets/`: logo light/dark, favicons, `fonts/`, and `og-image.jpg` (1200x630 JPG link preview for index and portfolio; JPG because WhatsApp and LinkedIn often drop WebP previews).
- `scripts/` (dev only):
  - `images.mjs`: builds WebP sizes for cleared projects (from `_source/projects/<slug>/`) + team + process; canvas re-encoding strips all metadata
  - `compress.mjs`: one-off WebP conversion
  - `webp.mjs`: shared encoder
  - `snapshot.mjs`: version history
  - `serve.mjs`: gzip preview on 8090, for Lighthouse
  - `serve.ps1`: no-install preview on 8080

## Projects (project.json)
```json
{ "title": "", "region": "", "summary": "", "category": ["pool","outdoor-living","hillside","planting","front-yard"],
  "cleared": false, "featured": false, "cover": "x.webp", "coverNight": "y.webp",
  "images": [{ "file": "x.webp", "caption": "", "alt": "", "time": "day|night" }] }
```
- **Renders only** (since v5): no 2D plans, site photos, clay models, screenshots or top-down views in the portfolio. The one exception is `pool-courtyard-citrus/overhead.webp`, which is used only by the "From overhead" slider and is not listed in project.json.
- **Design-based names:** slugs, titles, file names, captions and alt text describe the design only (e.g. `modern-pool-courtyard/pool-on-axis-with-the-pergola-fire-lounge-night.webp`). Never use a number, client name, address or original file name.
- Duplicates are removed, keeping the largest version. All metadata is stripped by the encoder.
- `region`: blank (or a state), **never an address**.
- `coverNight` (optional) gives the card a Day/Night toggle. Images are listed with the day cover first, then the night cover, then the rest.
- The "Night" filter = any `time: "night"` image.
- **Only `cleared: true` projects appear anywhere** (the repo is public).
- **Priority = `featured: true`.** Priority projects feed the hero camera roll (night and day alternating, starting with night), the night band and Selected Work. The home page shows the first `CONFIG.homeProjectCount` (6) featured projects in `CONFIG.projects` order. The portfolio page shows all cleared projects, with priority projects first.
- Hero slides and the band image must come from priority projects.

## Image provenance (strict)
- v5 (Oct 2026) rebuilt the portfolio from the founders' render set ("Priority Renders" and "Not Priority"). The founders confirmed all of it as cleared and as representative of what clients receive.
- Some priority sets were Gemini-edited versions of original renders. Where both versions existed, the original (larger) render was kept.
- Priority projects publish every unique render. Not-priority projects publish their best 8.
- The originals, including the v4 set and the full "FROM SCRATCH" delivery, are archived outside the repo in `../overyard-archive/`.
- For any new project: publish only after the founders confirm image rights and that the images represent what clients receive.
- Several source folders were named after clients. Never use client names in filenames, captions, alt text or commit messages.

## No-JS defaults (important)
- The HTML contains the **real default text** for every price, count, turnaround and credit (founding tier), so link previews and crawlers see values.
- The `data-cfg*` attributes only **update** that text from CONFIG. Empty values hide the element or its nearest `[data-cfg-block]`.
- When you change a default in CONFIG, also change the matching text in the HTML.
- Prices bind to `packages.<k>.price` / `.regular`, `memberships.<k>.price`, `seed.price` / `seed.regular` (all computed from the ladder).
- Config-dependent links (booking, sample PDF, portal) ship with `hidden` and no `href`. Never use `href="#"`.
- Email-only lines ship `hidden`.
- The contact form posts straight to Web3Forms without JS (`action`, hidden `access_key` = `CONFIG.web3formsKey`; keep both in sync). `initForm` runs in the first batch so a JS visitor never falls through to the plain post.

## Version history
Before a significant change: `git tag vN` on the current commit and run `node scripts/snapshot.mjs vN`. Copies and screenshots of index and portfolio go to `../overyard-site-history/` (outside the public repo). `compare.html` there compares any two versions.

## Brand system: "From the ground up"
Overyard is the bird's-eye plan view every design starts from. The visual signature is a landscape drawing set: title blocks, north arrow, plan symbols, thin rules and mono sheet labels.

- **Theme:** dark by default (`data-theme="dark"`), light toggle saved in localStorage `overyard-theme`, applied before paint by an inline `<head>` script; `theme-color` follows it.
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

  The light stone, gold and clay values are darker than the original brief so text passes WCAG AA (4.5:1). Re-check contrast whenever you change a color.
- **Color meaning (fixed):**
  - fern: action and growth
  - stone: Seed
  - gold: Orchard and value highlights (takeoff prices)
  - clay: urgency and important terms only (guarantee, founding deadline and spots, Old Growth); never decorative
  - Primary buttons: `--fern` background with `--bg` text
- **Type:** Bricolage Grotesque 700/800 headings, Manrope 400/500/600 body (17px, 1.6), JetBrains Mono 400/600 uppercase labels.
- **Motifs:**
  - mono sheet labels (L-01 … L-11 on the home page, P-00 on the portfolio, L-12/L-13 on the legal pages, L-14 on the 404 page)
  - north arrow in the hero and footer
  - title-block footer with scale bar
  - dashed stepping-stone path in How it works
  - crop-mark frames on project cards
  - plan-symbol glyphs per tier
  - canopy-"O" logo
- **Motion** (content is always visible; everything respects `prefers-reduced-motion`):
  - Hero H1: word-by-word rise, then a drafting line (pure CSS; words start at opacity .01).
  - Camera roll: 6s crossfade with a Ken Burns zoom, filmstrip, pause/play, pauses on hover and when the tab is hidden.
  - Work: PLAN/VIEW slider, bento with Day/Night toggles, one-time wipe.
  - Night band: a single one, with desktop-only parallax.

## Offer
- **Price ladder** (`CONFIG.priceLadder`, by member count; `membersSoFar` picks the tier). The site shows the current tier (large), the regular list price struck through, and a "Next price" line for the next tier.

  | Members | Seed | Sprout | Grove | Canopy | Orchard | Forest | Old Growth |
  |---|---|---|---|---|---|---|---|
  | 1–5 (founding) | 199 | 199 | 399 | 799 | 699 | 1,299 | 2,399 |
  | 6–10 | 229 | 229 | 459 | 919 | 799 | 1,499 | 2,759 |
  | 11–20 | 265 | 259 | 529 | 1,059 | 919 | 1,729 | 3,179 |
  | 21+ (regular) | 325 | 349 | 649 | 1,249 | 1,099 | 1,999 | 3,699 |

- **Founding:**
  - Offer line: "Founding rates for the first 5 members, until April 30, 2027 (`foundingDeadline`). Spots left: 5 − membersSoFar."
  - After the deadline, the 6–10 tier applies.
  - Founding members keep founding rates for 6 months, then move to the members 6–10 rate while active.
- **Seed Project:** Grove scope, one per company. After a discovery call we design it and show watermarked previews; the client pays to unlock the full files (it's not paid upfront). Refund guarantee: "If the design misses the brief after the included revisions, you get a full refund."
- **Single projects:** Sprout (1 credit, 10 renders), Grove (2, 15 renders, "Most popular"), Canopy (4, 20 renders, walkthrough and takeoff included). The Seed has Grove scope, so 15 renders.
- **Size guide:** whichever is higher (budget or area) sets the tier:
  - Sprout: up to $75k / 1,500 sq ft
  - Grove: up to $250k / 5,000 sq ft
  - Canopy: up to $750k / 15,000 sq ft
  - Canopy Plus: Canopy price + $300 per extra $250k of build budget (or part), custom quote
- **Evergreen memberships:** Orchard (4 credits), Forest (8, "Best value"), Old Growth (16, waitlist).
  - Fair use: active projects at a time Orchard 1 · Forest 2 · Old Growth 4. Credits cover Sprout to Canopy; Canopy Plus uses extra credits.
  - Unused credits roll over one month (capped). Billed monthly in advance. 30 days' notice to cancel.
- **Add-ons:** takeoff $75 ($49 members), extra round $49, 5 extra renders $49 (`addons.extraRenders`), rush +50%, redesign quoted as a new project.
- **Payment:** card or bank transfer via a Wise or Payoneer invoice; the Seed is paid after the previews, other single projects upfront. USD.
- The live values are always the ones in `CONFIG`. Update this section if they change.

## Business facts (do not change or exaggerate)
- White-label (default wording) and co-branded landscape design for landscape, hardscape, pool and outdoor-living contractors in the US and Australia. Based in the Philippines.
- Team (in this order on the site):
  - **Edmond De Claro**, Co-founder · Design Lead: "Edmond has designed and revised 1,000+ residential landscape projects over 6+ years as a landscape designer and revisionist." His CV also covers residential, commercial and park projects, 3D walkthroughs, lighting and irrigation layouts (RLA) and hardscape/softscape estimating; the site mentions these without naming past employers (one is an online design service). Don't mention his degree title (it contains "Landscape Architecture"). He leads design and reviews every project. Tools (`CONFIG.edmondTools`): Realtime Landscaping Architect, SketchUp, Lumion, D5 Render.
  - **Alejandro Bernardo Jr.**, Co-founder · Head of Sales: first call and account manager (discovery calls, proposals, onboarding, keeping projects on track); 9+ years in sales, account management and operations (his CV: account manager for key client accounts, operations manager over 200+ agents, most recently executive assistant to a US company's CEO running discovery calls and onboarding). Never round up to 10+. The contact person ("Alejandro replies within 12 hours"). No employer names on the site.
  - **Kim Daryl Geolagon**, Co-founder · CEO: the business side (offer, pricing, marketing, website, client portal, systems). Licensed civil engineer by background. Set up the Seed Project and founding-member price ladder. Uses AI tools to build and run the systems (never imply the designs are AI-made). Goal on the site: professional design as an easy, predictable cost for contractors (clear prices, fast turnaround, one point of contact). Don't add his estimating background (takeoff honesty rule).
  - **Axl Jhon Olaso**, Designer · Revisionist: designs and revises plans and renders with Edmond, and prepares material takeoffs. Photo: images/team/axl.webp.
- Mission: "Help landscape and outdoor-living contractors win more jobs with design that sells, at a price that makes sense." Vision: "Become the design partner contractors trust most, and a place where Filipino landscape designers build world-class careers."

## Honesty rules (strict)
- The 1,000+ figure belongs to **Edmond personally**. Never say Overyard delivered 1,000+ projects, and never imply a large team.
- **Takeoffs are prepared by our design team from the approved design.** Never claim takeoffs are done by a licensed civil engineer. Kim's bio may say "licensed civil engineer by background".
- Never use "landscape architect/architecture" for us. The software name "Realtime Landscaping Architect" is the only exception.
- No testimonials, client logos, reviews, ratings, client counts or invented statistics. The takeoff section lists item types and units only, never made-up quantities.
- None of these may appear anywhere:
  - "free sample render"
  - "Our team does residential landscape design full time"
  - "Edmond leads the design team"
  - "US clients get progress overnight"
  - "These are a few of the projects we can show publicly"
  - "About 7 years"
  - any [City, State] tag
- The time-zone benefit is worded only as: our day overlaps Australian business hours, and US contractors send notes at the end of their day and find progress when they're back on the job.
- Only cleared projects (see Image provenance).
- The comparison table names no competitors. The only sourced figure is "Typically $2,200+ per project" for a local designer (lawnstarter.com/blog/cost/landscape-design-price/, typical range $2,200 to $6,180).
- Designs are conceptual. The contractor verifies site conditions, measurements, codes, HOA rules and utilities. No stamped engineering, permit drawings or installation.
- Never show a raw placeholder (`[X]`, `[$___]`, `#`).

## Copy rules
- Short, direct, contractor language. Readable on a phone. No sugar-coating.
- No mention of the Philippines or low cost in the hero. The Philippines appears in Team and the FAQ.
- Primary action everywhere: "Start a $199 Seed Project". Secondary: "Book a call", "See a sample package", "See the full portfolio".
- WhatsApp (+63 976 373 0461) appears in Contact and the footer, never the hero.
- Social icons always show; an empty URL renders a muted "Coming soon" icon.
- "Client login" shows only when `portalUrl` is set.
- "Request the full portfolio" is a form option; links from other pages use `index.html?topic=portfolio#contact`.

## Technical rules
- Every image has `width`/`height`. The first hero slide is preloaded with a `-md` srcset for phones. JS-rendered images use `data-near-src` + `loadWhenNear()`. Extra hero slides and thumbnails load after `load`.
- New images: run `node scripts/images.mjs` (2000px ~250 KB, up to ~400 KB for dense foliage; 900px; 320px).
- Fonts are self-hosted, preloaded, `font-display: swap`. The mono fallback is Courier New (same width). Keep CLS at 0. Reserve space for async-filled grids (`#portfolio-grid:empty`).
- **Don't use `content-visibility`**: its height estimates broke in-page anchor jumps on phones (fixed in v4).
- `main.js` runs theme, header and camera roll first. On the home page everything else waits for the `load` event and then runs one step per task (`inSteps`), so no single long task lands near first paint. The portfolio page starts its grid straight after the first paint.
- Analytics: GA4 (`ga4Id`) and Clarity (`clarityId`) queue commands at once but download their scripts only on the first scroll/tap/click/key or after `ANALYTICS_DELAY` (6 s). Loading them earlier cost ~350 ms of blocking time and best practices 77 (Clarity third-party cookies). GA4 events: `generate_lead` (form), `book_call`, `whatsapp_click`, `open_project`.
- Lighthouse (live site, Oct 2026, v5): index mobile 83–98 (runs vary; ~90 average) / 100 / 100 / 100, desktop 100 across the board; portfolio mobile ~98 / 100 / 100 / 100. The remaining home cost is the first layout of the whole page (~1,400 elements, ~150 ms unthrottled). Keep 90+.
- Test at 375, 768 and 1280px in both themes on all four pages. No horizontal page scroll.
- Commit in small steps, with the Co-Authored-By line when the session asks for it. Pushing to `main` publishes the live site.
