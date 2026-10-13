# Overyard website

A one-page lead-generation site: plain HTML, CSS and a little JavaScript. There is no build step and nothing to install.
Live at **https://kimdeegeo.github.io/overyard-website/**

```
index.html        The whole page. Each section is marked with a numbered comment banner.
css/style.css     Styling. Colors, font and spacing are variables at the top.
js/main.js        SITE SETTINGS block at the top (prices, links, IDs), then the site's scripts.
images/           Renders and photos.
assets/           Logo, mark and favicons.
CLAUDE.md         Brand, honesty and copy rules (read by Claude in future sessions).
serve.ps1         Local preview server for Windows.
```

---

## 1. Preview locally

Open PowerShell in this folder and run:

```
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Then open **http://localhost:8080**. Press `Ctrl+C` to stop. If you have Python, `python -m http.server 8080` also works.

---

## 2. Edit the settings (prices, links, numbers)

Open `js/main.js`. Everything you're likely to change is in the **SITE SETTINGS** block at the top:

| Setting | What it controls |
|---|---|
| `email` | Email links in the FAQ, contact section and footer |
| `bookingUrl` | Your Calendly link. Every "Book a call" button and the inline calendar use it |
| `web3formsKey` | Turns the contact form on (see section 4) |
| `ga4Id`, `clarityId` | Google Analytics 4 and Microsoft Clarity. Scripts only load when set |
| `social` | LinkedIn / Instagram / Facebook links |
| `foundingSpots`, `rateLockMonths` | "Only 5 founding spots… locked for 6 months" |
| `guarantee` | Guarantee text (pricing and FAQ) |
| `sample` | Free sample render turnaround and terms |
| `packages` | Founding price, regular price, renders, video, revision rounds, takeoff, turnaround per package |
| `takeoffAddon`, `extraRevision`, `rush` | Add-on prices |
| `currencyNote` | "All prices in USD." |
| `walkthroughVideo`, `walkthroughPoster` | Optional looping video in the Work section |
| `founderPhotos` | Founder photo paths (initials show until set) |
| `beforePhotos` | Before photos for the before/after slider |

**Rule:** leave a value empty (`""`) or `0` and whatever uses it is hidden. Placeholder text never shows on the live site.

Turnaround and revision ranges in "How it works", the FAQ and the comparison table are worked out from the packages automatically.

## 3. Text, colors and images

- **Text:** in `index.html`. Search for the section banners (`2. HERO`, `3. PROBLEM`, `4. WORK`, `5. HOW IT WORKS`, `6. PRICING`, `7. COMPARISON`, `8. ABOUT`, `9. FAQ`, `10. CONTACT`, `11. FOOTER`).
- **Colors:** `--color-accent` and `--color-accent-hover` at the top of `css/style.css`. The logo SVGs in `/assets` contain `#3D5A45` too.
- **Swap an image:** save the new file into `/images` with the **same filename**.
- **Work section:** each project is an `<article class="work-card">`. The cover image is the first `<img>`. The full gallery is the list inside `<template class="work-images">`. To add an image to a gallery, copy one `<img data-src=…>` line and change the file, `alt` and `data-caption`. Keep the plan view last.
- **Before/after slider:**
  1. Save a site photo as `images/project-01-before.webp` (any project number; same framing as the project's first gallery image works best).
  2. In `js/main.js`, set `beforePhotos: { "project-01": "images/project-01-before.webp" }`.
  3. That project's gallery then opens on a drag-to-compare slider.

  For the hero, use `hero-01-before.webp` and the `hero` key. Project numbers: 01 modern pool, 02 pool courtyard, 03 terraced hillside, 04 lakeside hillside, 05 wooded lakefront.
- **Founder photos:** save `images/founder-edmond.jpg` and `images/founder-kim.jpg` (4:5 portrait), then set the paths in `founderPhotos`.
- **Walkthrough video:** save `videos/walkthrough-01.mp4` (muted, under ~10 MB), then set `walkthroughVideo`. A poster image is optional.
- Keep images under about 500 KB, 2000px wide at most. [squoosh.app](https://squoosh.app) compresses them for free.

## 4. Connect the contact form (Web3Forms, free)

1. Go to [web3forms.com](https://web3forms.com), enter the email address that should receive leads, and copy the **access key** they send you.
2. Paste it into `web3formsKey` in `js/main.js`.
3. Commit and push. Submit a test from the live site and check your inbox (and spam folder the first time).

The key is safe to have in public code because it only lets people send to your inbox. A hidden "botcheck" field filters basic spam bots. Until a key is set, the form shows a "not connected yet" message and sends nothing.

## 5. Connect Calendly

1. In Calendly, create a 15 to 30 minute event and copy its link (e.g. `https://calendly.com/overyard/intro-call`).
2. Paste it into `bookingUrl` in `js/main.js`.

The calendar appears under the contact form and only loads when a visitor scrolls near it. All "Book a call" buttons jump to it.

## 6. Deploy (GitHub Pages)

The site deploys automatically from the `main` branch. To publish changes:

```
git add -A
git commit -m "Describe the change"
git push
```

The live site updates within a minute or two. Pages is set up under **Settings → Pages → Deploy from a branch → main / (root)**.
