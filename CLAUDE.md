# Overyard website: rules for Claude

Lead-generation site for Overyard: plain HTML, CSS and vanilla JS with no framework and no build step. Hosted on GitHub Pages from `main` at https://kimdeegeo.github.io/overyard-website/.

## Goal
A busy US or Australian landscape contractor understands the offer in 10 seconds, trusts us in 30, and takes one action on the first visit: **start a $199 Seed Project** or **book a call**.

## Budget rule
Free tools only: Web3Forms (form), Cal.com or Calendly free (booking link), GitHub Pages (hosting), GA4 and Microsoft Clarity (analytics), Google Fonts. No paid libraries, fonts, plugins or services.

## Files
- `index.html`: home page. Sections are marked with numbered comment banners.
- `privacy.html`, `terms.html`: legal pages with the same header, theme toggle and footer. The header and footer are duplicated, so update all three pages together.
- `css/style.css`: all styling. Both themes are CSS variable blocks at the top.
- `js/main.js`: the **SITE SETTINGS (`CONFIG`) block at the top** holds every price, credit, window, link, ID and the Work `projects` list. Pricing cards, memberships, add-ons, project cards and "What you receive" are rendered from it. Other values use `data-cfg`, `data-cfg-money`, `data-cfg-if` and `data-cfg-unless`. Empty values hide the element, or its nearest `[data-cfg-block]` wrapper.
- `images/`, `assets/` (logo light/dark, favicons). `serve.ps1`: local preview on port 8080.

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
- **Motion:** content is always visible. Only elements that start below the fold get a short rise-in. Everything respects `prefers-reduced-motion`.

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
- **Edmond De Claro**, co-founder and design lead: "Edmond has designed and revised 1,000+ residential landscape projects over 6+ years as a landscape designer and revisionist." Tools: Realtime Landscaping Architect, SketchUp, Lumion and D5 Render.
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

## Technical rules
- Non-hero images: `loading="lazy"` plus `width`/`height`. Preload the hero (night render) and fonts.
- No 404-probing for optional files. These are switched on by setting their path in `CONFIG`, which keeps the console clean:
  - `samplePackagePdf`, `heroBefore`, `samplePlan`
  - `walkthroughVideo`
  - each project's `beforeImage`
- Header is sticky at `top: env(safe-area-inset-top)`. The mobile CTA bar respects `env(safe-area-inset-bottom)`.
- Test at 375, 768 and 1280px in both themes. There must be no horizontal page scroll. Lighthouse target is 90+.
- Commit in small steps, with the Co-Authored-By line when the session asks for it. Pushing to `main` publishes the live site.
