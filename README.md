# Overyard website (v1)

A one-page site built with plain HTML, CSS and a little JavaScript. There is no build step and nothing to install.

```
index.html          The whole page. Each section is marked with a big comment banner.
css/style.css       All styling. Colors, font and spacing are variables at the top.
js/main.js          Booking link, form connection, mobile menu, fade-in effects.
images/             Renders, before photos, plans, founder photos.
assets/             Logo, mark and favicons.
favicon.ico         Fallback icon for older browsers.
serve.ps1           Local preview server (Windows, no installs needed).
```

---

## 1. Preview locally

**Windows (no installs needed):** open PowerShell in this folder and run:

```
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Then open **http://localhost:8080**. Press `Ctrl+C` to stop.

**If you have Python or Node installed**, either of these also works:

```
python -m http.server 8080
npx serve .
```

Double-clicking `index.html` also works for a quick look, but a local server is closer to the live site.

---

## 2. Where to edit things

### Text
All text lives in `index.html`. Search for the section banners:

| Section | Search for |
|---|---|
| Header / nav | `1. HEADER` |
| Hero headline | `2. HERO` |
| How it works | `3. HOW IT WORKS` |
| What you get | `4. WHAT YOU GET` |
| Portfolio | `5. PORTFOLIO` |
| Why Overyard | `6. WHY OVERYARD` |
| Packages / prices | `7. PACKAGES` |
| Founders | `8. ABOUT` |
| FAQ | `9. FAQ` |
| Contact form | `10. CONTACT` |
| Footer | `11. FOOTER` |

The page title and search-engine description are at the top of `index.html`.

### Colors
Open `css/style.css`. The first block (`:root`) holds every color:

```css
--color-accent: #3D5A45;       /* the green */
--color-accent-hover: #2E4636; /* button hover */
```

Change those two lines to re-color the whole site. Other green options:
- **Deep Forest** `#2E4636` (hover `#22352A`)
- **Sage** `#7C9479`. Too light for white button text, so only use it for small accents.

The logo files in `/assets` have the green written inside them too. Open each `.svg` in a text editor and replace `#3D5A45`.

### Font
The site uses Manrope. To change it, swap the Google Fonts `<link>` in `index.html` and update `--font` in `css/style.css`.

### Images
Every image points to a fixed filename in `/images`. **To add or replace an image, save it into `/images` with exactly the same filename.** No code changes needed. Until a file exists, the page shows a gray box labeled with the filename and recommended ratio.

- Use the **same extension** as listed (`.jpg` or `.webp`). If your file is a `.png`, either convert it or change the filename in `index.html`.
- Keep images under about 500 KB each (2000px wide is plenty). [squoosh.app](https://squoosh.app) is a free tool for compressing them.
- Update the `alt="..."` text next to each image so it describes the picture.

**Adding a portfolio project:** in `index.html`, copy a whole `<article class="project">…</article>` block, paste it below the last one, and change `project-04` to `project-05` in the filenames. Then update the text.

### Booking link and contact form
Both are set at the top of `js/main.js`:

```js
const BOOKING_URL = "";   // e.g. "https://calendly.com/overyard/intro-call"
const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/abcdwxyz"
```

- **BOOKING_URL:** every "Book a call" button opens this link. While it's empty, the buttons scroll to the contact section.
- **FORM_ENDPOINT:** where form submissions are sent. While it's empty, the form only shows a thank-you message and **nothing is sent**. Simplest route: create a free form at [Formspree](https://formspree.io) (or [Basin](https://usebasin.com)), copy its endpoint URL, and paste it here. Submissions then arrive in your email. This works on any host.

---

## 3. Placeholder checklist

### Images still needed (drop into `/images`)
- [ ] `project-01-before.jpg` (4:3), site photo before design
- [ ] `project-01-plan.jpg` (4:3), 2D plan
- [ ] `project-02-before.jpg` (4:3)
- [ ] `project-02-plan.jpg` (4:3)
- [ ] `project-03-before.jpg` (4:3)
- [ ] `project-03-plan.jpg` (4:3)
- [ ] `project-04-before.jpg` (4:3)
- [ ] `project-04-plan.jpg` (4:3)
- [ ] `founder-edmond.jpg` (4:5 portrait)
- [ ] `founder-kim.jpg` (4:5 portrait)

Already in place: `hero-01.webp` and all `project-0X-render*.webp` files.

### Text placeholders (search `index.html` for `[`)
- [ ] `[X days]`: turnaround (How it works, Why Overyard, each package, FAQ)
- [ ] `[X]`: number of renders and revision rounds (How it works, packages, FAQ)
- [ ] `[$___]`: package prices, takeoff add-on price, extra revision price
- [ ] `[available / $___]`: rush delivery (FAQ)
- [ ] `[City, State]`: location for each portfolio project (4)
- [ ] `[X business hours]`: reply time (Contact)
- [ ] `[XX]-minute`: call length (Contact)
- [ ] `[hello@overyard.com]`: real email, in 2 places (Contact + Footer). Update both the visible text and the `mailto:` link.

### Links and settings
- [ ] `BOOKING_URL` in `js/main.js`
- [ ] `FORM_ENDPOINT` in `js/main.js`
- [ ] Social links in the footer (replace each `href="#"`, and remove any you don't use)
- [ ] After going live: change `og:image` in `index.html` to the full URL (e.g. `https://overyard.com/images/hero-01.webp`) so link previews show the render

### Review before launch
- [ ] Portfolio project titles and descriptions match the real projects
- [ ] Founder bios
- [ ] FAQ answers (time zones, file formats)

---

## 4. Deploy for free

### Option A: Netlify (easiest, no account setup beyond sign-up)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and sign up (free).
2. Drag this whole folder onto the page.
3. You get a live URL in seconds. To update the site later, drag the folder again (Site → Deploys).
4. Custom domain: Site settings → Domain management → Add domain.

### Option B: Vercel
1. Sign up at [vercel.com](https://vercel.com) (free).
2. Install the CLI (`npm i -g vercel`, needs Node.js), or connect a GitHub repo (see Option C, step 1–3).
3. In this folder run `vercel` and accept the defaults. There is no framework and no build command.
4. Add a custom domain under Project → Settings → Domains.

### Option C: GitHub Pages
1. Create a free account at [github.com](https://github.com) and a new **public** repository (e.g. `overyard-website`).
2. Upload the files: on the repo page, choose **Add file → Upload files**, drag in everything in this folder, and commit. (Or push with git.)
3. Go to **Settings → Pages**, set Source to **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
4. After about a minute the site is live at `https://<your-username>.github.io/overyard-website/`.
5. Custom domain: enter it on the same Pages settings screen and follow GitHub's DNS instructions.

All paths in the site are relative, so it works in a subfolder (like GitHub Pages) without changes.
