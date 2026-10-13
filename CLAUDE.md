# Overyard website: rules for Claude

One-page lead-generation site for Overyard. Plain HTML, CSS and vanilla JS with no framework and no build step. Hosted on GitHub Pages from `main` at https://kimdeegeo.github.io/overyard-website/.

## Goal
A busy US or Australian landscape contractor should understand the offer in 10 seconds, trust us in 30, and take one action: **request a free sample render** or **book a call**.

## Files
- `index.html`: all page content. Sections are marked with numbered comment banners.
- `css/style.css`: all styling. Colors, font and spacing are CSS variables in `:root`.
- `js/main.js`: the **CONFIG block at the top** holds every price, count, turnaround, spots, guarantee, email, links and IDs. HTML elements read it via `data-cfg`, `data-cfg-money`, `data-cfg-rounds`, `data-cfg-renders`, `data-cfg-if` and `data-cfg-unless`. Empty values hide the element, or its nearest `[data-cfg-block]` wrapper.
- `images/`: renders. `assets/`: logo and favicons. `serve.ps1`: local preview on port 8080.

## Brand
- Name: **Overyard** (one word, capital O only).
- Font: Manrope (Google Fonts). Accent: Fern green `#3D5A45`. Text `#111111` on off-white `#F7F7F5`.
- Minimalist: lots of white space, thin dividers, no gradients, no icon clutter, subtle motion only, and respect `prefers-reduced-motion`.
- Green is used sparingly: logo, buttons, small highlights.

## Business facts (do not change or exaggerate)
- White-label and co-branded landscape design for landscape, hardscape, pool and outdoor-living contractors in the US and Australia.
- **Edmond De Claro**, co-founder and design lead: has designed and revised 1,000+ residential landscape projects over 6+ years as a landscape designer and revisionist. Tools: Realtime Landscaping Architect and Lumion.
- **Kim Daryl Geolagon**, co-founder, sales and client accounts: licensed civil engineer, 5+ years in construction, current remote estimator for a US general contractor. Single point of contact. Handles material takeoffs.
- Two founders, based in the Philippines. **Edmond is the only designer right now.**

## Honesty rules (strict)
- The 1,000+ figure belongs to **Edmond personally**. Never write "Overyard has delivered 1,000+ projects," and never imply a large team ("our team", "design team", "our designers").
- Never use "landscape architect" or "landscape architecture" to describe Overyard or the founders. Use "landscape design" and "landscape designer". The only exception is the software product name "Realtime Landscaping Architect".
- No testimonials, client logos, reviews, star ratings, client counts or invented statistics.
- No location lines (e.g. [City, State]) on projects.
- Don't claim "progress overnight" or "full-time team". The time-zone benefit is worded only as: our workday overlaps Australian business hours, and US clients can send notes at the end of their day and see progress when they're back on the job.
- The comparison table names no competitors. Other columns use factual, non-defamatory wording ("Varies", "Depends on their schedule"). The only sourced number is the local designer cost, "Typically $2,200+ per project" (lawnstarter.com/blog/cost/landscape-design-price/, typical range $2,200 to $6,180).
- Designs are conceptual. The contractor verifies site conditions, codes, HOA rules and utilities. No stamped engineering, permit drawings or installation.

## Copy rules
- Short, direct, contractor language. Readable on a phone. No sugar-coating.
- Don't mention the Philippines or low cost in the hero. The Philippines appears in About and the FAQ as a time-zone benefit.
- Never show a raw placeholder like `[X days]` or `[$___]` on the page. Put the value in CONFIG, or let it hide.
- One primary action repeated: "Get a free sample render". Secondary: "Book a call", "See pricing".

## Technical rules
- Keep `loading="lazy"` plus `width`/`height` on every non-hero image. The hero is preloaded.
- Don't add 404-probing for optional images. Optional files (before photos, founder photos, video) are switched on through CONFIG paths so the console stays clean.
- Test at 375, 768 and 1280px. There must be no horizontal page scroll.
- Commit in small steps. End commit messages with the Co-Authored-By line if the session requires it.
