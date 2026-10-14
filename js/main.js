/* ==========================================================================
   OVERYARD: SITE SETTINGS  (edit this block)

   Every price, number, link, image list and ID on the site comes from here.
   The HTML already contains these default values (so link previews and
   crawlers see real text); this block updates them when you change them.
   Leave a value empty ("") or 0 to HIDE whatever uses it, so placeholder
   text never shows on the live site.
   ========================================================================== */
const CONFIG = {

  // ---- Contact and booking ----
  email: "",              // e.g. "hello@overyard.com"  (shown as plain text when set)
  bookingUrl: "",         // Cal.com or Calendly link (opens in a new tab; hidden when empty)
  web3formsKey: "",       // Access key from web3forms.com. The form won't send until this is set.
  replyHours: 12,         // "Kim Daryl replies within 12 hours"
  callMinutes: 20,        // "Book a 20-minute call"
  whatsapp: {
    display: "+63 976 373 0461",            // shown on the page ("" = hidden)
    url: "https://wa.me/639763730461",      // opens WhatsApp in a new tab
  },
  portalUrl: "",          // "Client login" link in the header (hidden when empty)

  // ---- Social links ----
  // All five icons always show. Empty = muted icon with a "Coming soon" tooltip.
  // Fill in a URL and the icon becomes a real link.
  facebookUrl: "",
  instagramUrl: "",
  tiktokUrl: "",
  youtubeUrl: "",
  linkedinUrl: "",

  // ---- Analytics (scripts only load when an ID is set) ----
  ga4Id: "",              // e.g. "G-XXXXXXXXXX"
  clarityId: "",          // e.g. "abcd1234ef"

  // ---- Team ----
  edmondTools: ["Realtime Landscaping Architect", "SketchUp", "Lumion", "D5 Render"],

  // ---- Founding offer ----
  foundingSpots: 5,
  rateLockMonths: 6,
  seedJoinWindowDays: 14, // join as a Founding Root within X days of Seed delivery
  seedCreditDays: 7,      // join a membership within X days and the Seed price is credited
  currencyNote: "All prices in USD.",

  // ---- Seed Project (first project, one per company) ----
  seed: {
    price: 199,
    was: 399,
    scope: "Grove",       // which package's deliverables the Seed includes
    guarantee: "If the design misses the brief after the included revisions, you get a full refund.",
  },

  // ---- Single projects ----
  // founding = price shown large, regular = struck through, credits = membership credits used
  packages: {
    sprout: { name: "Sprout", founding: 199, regular: 349, credits: 1, plan: "2D site and planting plan",
      renders: 3, walkthrough: "", rounds: 1, takeoff: false, days: "3 business days" },
    grove:  { name: "Grove", founding: 399, regular: 649, credits: 2, plan: "2D plan + planting schedule",
      renders: 6, walkthrough: "", rounds: 2, takeoff: false, days: "5 business days" },
    canopy: { name: "Canopy", founding: 799, regular: 1249, credits: 4, plan: "Full plan set",
      renders: 10, walkthrough: "60–90 sec walkthrough video", rounds: 3, takeoff: true, days: "7–10 business days" },
  },

  // ---- Evergreen memberships (monthly) ----
  memberships: {
    orchard:   { name: "Orchard", founding: 699, regular: 1099, credits: 4 },
    forest:    { name: "Forest", founding: 1299, regular: 1999, credits: 8 },
    oldGrowth: { name: "Old Growth", founding: 2399, regular: 3699, credits: 16 },
  },
  // (Perks, descriptions and the Old Growth waitlist are written in index.html.)

  // ---- Add-ons ----
  addons: {
    takeoff: 75,
    takeoffMembers: 49,
    extraRound: 49,
    rush: "+50%",
    redesign: "Quoted as a new project",
  },

  // ---- Hero camera roll ----
  // Day and night renders that crossfade in the hero frame. Start with a night
  // render, then alternate. Only use renders from cleared projects.
  // thumb = small filmstrip image (images/thumbs/, 240px wide).
  heroSlides: [
    { src: "images/modern-02.webp", thumb: "images/thumbs/modern-02.webp", time: "night", w: 2000, h: 1125,
      label: "Sheet R-01 · 3D render · Modern pool · Night", alt: "Night render of a modern pool and spa with a lit pergola fire lounge" },
    { src: "images/hero-01.webp", thumb: "images/thumbs/hero-01.webp", time: "day", w: 2000, h: 1125,
      label: "Sheet R-02 · 3D render · Modern pool · Day", alt: "Render of a modern pool with a slatted pergola fire lounge, lounge deck and cypress trees" },
    { src: "images/courtyard-04.webp", thumb: "images/thumbs/courtyard-04.webp", time: "night", w: 2000, h: 1125,
      label: "Sheet R-03 · 3D render · Citrus fire pit · Night", alt: "Night render of a fire pit lounge under uplit lemon trees" },
    { src: "images/courtyard-01.webp", thumb: "images/thumbs/courtyard-01.webp", time: "day", w: 1920, h: 1080,
      label: "Sheet R-04 · 3D render · Pool courtyard · Day", alt: "Render of a backyard with a fountain, stepping pads, pool and spa, and a fire pit under lemon trees" },
    { src: "images/terraced-04.webp", thumb: "images/thumbs/terraced-04.webp", time: "night", w: 1440, h: 959,
      label: "Sheet R-05 · 3D render · Terraced hillside · Night", alt: "Night render looking up lit stairs past wall-washed retaining walls" },
    { src: "images/courtyard-03.webp", thumb: "images/thumbs/courtyard-03.webp", time: "day", w: 2000, h: 1125,
      label: "Sheet R-06 · 3D render · Citrus fire pit · Day", alt: "Render of a fire pit lounge on a stamped concrete pad framed by lemon trees" },
  ],
  heroInterval: 6,        // seconds per slide

  // ---- Full-width night band (after How it works) ----
  bandImage: "images/courtyard-02.webp",

  // ---- How it works images (portrait, ~4:5). "" = plan-symbol placeholder ----
  processImages: [
    "images/process-01.webp",   // 01 · Send site info   (site photos)
    "images/process-02.webp",   // 02 · We design        (clay 3D model)
    "images/process-03.webp",   // 03 · You revise       (finished render)
    "images/process-04.webp",   // 04 · You close and build (2D plan sheet)
  ],

  // ---- Optional files (leave "" until the file is in the folder) ----
  samplePackagePdf: "",   // e.g. "assets/sample-package.pdf"  → shows "See a sample package"
  samplePlan: "images/process-04.webp",  // the "2D plan" in What you receive
  receiveProject: "Pool courtyard and citrus grove", // renders shown in What you receive
  walkthroughVideo: "",   // e.g. "videos/walkthrough-01.mp4"
  walkthroughPoster: "",

  // ---- Work: featured "From overhead" slider ----
  featured: {
    project: "Pool courtyard and citrus grove",
    plan: "images/courtyard-07.webp",   // plan view (left handle: PLAN)
    view: "images/courtyard-01.webp",   // eye-level render (right handle: VIEW)
  },

  // ---- Work: projects ----
  // Only projects with cleared: true are shown.
  // !! The founders must confirm image rights for every project before launch. !!
  // dayImage / nightImage = card images (images/cards/, 900px). With both set,
  //   the card gets a Day / Night toggle.
  // images = the full gallery ("View sheets"). plan: true marks the plan view,
  //   photo: true marks a site photo.
  // beforeImage (optional) adds a before/after slider as the first gallery slide.
  projects: [
    {
      name: "Modern pool and front yard",
      line: "Pool and spa, pergola fire lounge, outdoor kitchen, floating stairs and a low-water front yard.",
      cleared: true,
      dayImage: "images/cards/modern-01.webp", nightImage: "images/cards/modern-02.webp", cardW: 900, cardH: 506,
      beforeImage: "",
      images: [
        { src: "images/modern-01.webp", caption: "Pool, spa and outdoor kitchen", alt: "Render of a modern pool and spa with an outdoor kitchen bar in front and a slatted pergola lounge behind" },
        { src: "images/modern-02.webp", caption: "Pool and pergola lounge, night", alt: "Night render of the pool, spa and pergola fire lounge with landscape lighting" },
        { src: "images/modern-03.webp", caption: "Pergola fire lounge", alt: "Render of a slatted pergola with a fire table and lounge seating" },
        { src: "images/modern-04.webp", caption: "Floating stairs and water wall, night", alt: "Night render of floating concrete stairs on a grass slope beside a lit water wall" },
        { src: "images/modern-05.webp", caption: "Front yard planting", alt: "Render of a modern front yard with salvia, boulders, river rock and path lights" },
        { src: "images/modern-06.webp", caption: "Front yard lighting, night", alt: "Night render of the front yard with path lights and uplit shrubs" },
        { src: "images/modern-07.webp", caption: "Plan view", alt: "Top-down render of the property showing the pool, pergola, kitchen, side yards and front yard", plan: true },
      ],
    },
    {
      name: "Pool courtyard and citrus grove",
      line: "Pool and spa, pergola dining with an outdoor kitchen, and a fire pit under lemon trees.",
      cleared: true,
      dayImage: "images/cards/courtyard-01.webp", nightImage: "images/cards/courtyard-02.webp", cardW: 900, cardH: 506,
      beforeImage: "",
      images: [
        { src: "images/process-01.webp", caption: "Site photo · before", alt: "Site photo of the bare backyard before the design, with a tape measure in the foreground", photo: true },
        { src: "images/courtyard-01.webp", caption: "Courtyard overview", alt: "Render of a backyard with a fountain, stepping pads in lawn, a pool and spa, and a fire pit lounge under lemon trees" },
        { src: "images/courtyard-02.webp", caption: "Courtyard overview, night", alt: "Night render of the fountain, stepping pads, lit pool and uplit lemon trees" },
        { src: "images/courtyard-03.webp", caption: "Fire pit under the lemon trees", alt: "Render of a fire pit lounge on a stamped concrete pad framed by lemon trees" },
        { src: "images/courtyard-04.webp", caption: "Fire pit, night", alt: "Night render of the fire pit lounge with uplit lemon trees and in-ground lights" },
        { src: "images/courtyard-05.webp", caption: "Pergola dining and outdoor kitchen", alt: "Render of a pergola dining area with an outdoor kitchen, with the tiled spa and pool in front" },
        { src: "images/courtyard-06.webp", caption: "View from the fire pit", alt: "Render looking from the fire pit across the lawn and stepping pads to the pool and house" },
        { src: "images/courtyard-07.webp", caption: "Plan view", alt: "Top-down render of the pool, spa, pergola, lawn and stepping pads", plan: true },
      ],
    },
    {
      name: "Terraced hillside",
      line: "Three tiers of retaining walls, lit stairs, a sunken fire lounge and slope planting.",
      cleared: true,
      dayImage: "images/cards/terraced-01.webp", nightImage: "images/cards/terraced-04.webp", cardW: 900, cardH: 506,
      beforeImage: "",
      images: [
        { src: "images/terraced-01.webp", caption: "Hillside overview", alt: "Render of a terraced hillside backyard with tiered retaining walls, wide stairs, a sunken fire lounge and a lawn terrace" },
        { src: "images/terraced-02.webp", caption: "Sunken fire lounge", alt: "Render of a sunken fire lounge with stairs and planted terraces behind" },
        { src: "images/terraced-03.webp", caption: "Main stairs and terraces", alt: "Render of the main stairs climbing between planted terraces" },
        { src: "images/terraced-04.webp", caption: "Stair and wall lighting, night", alt: "Night render looking up the lit stairs past wall-washed retaining walls to the house" },
        { src: "images/terraced-05.webp", caption: "Plan view", alt: "Top-down render of the retaining walls, stairs, lawn terrace and fire lounge", plan: true },
      ],
    },
    {
      name: "Lakeside hillside",
      line: "Under-deck patio, curved retaining walls, a lakeside terrace and full landscape lighting.",
      cleared: true,
      dayImage: "images/cards/lakeside-02.webp", nightImage: "images/cards/lakeside-03.webp", cardW: 900, cardH: 599,
      beforeImage: "",
      images: [
        { src: "images/lakeside-01.webp", caption: "Under-deck patio and walkway, dusk", alt: "Dusk render of an under-deck patio with a curved seat wall, paver walkway, path lights and foundation planting" },
        { src: "images/lakeside-02.webp", caption: "Lakeside terrace and boathouse", alt: "Render of a lakeside paver terrace with retaining walls, planting beds and a boathouse, with the house on the hill behind" },
        { src: "images/lakeside-03.webp", caption: "Curved seat wall and driveway planting, night", alt: "Night render of a curved seat wall around a paver patio, with lit planting along the driveway" },
        { src: "images/lakeside-04.webp", caption: "Recessed stairs with step lighting", alt: "Dusk render of a large paver terrace with recessed stairs, step lighting and a retaining wall with planting above" },
        { src: "images/lakeside-05.webp", caption: "Aerial view", alt: "Aerial render of a curved paver patio, planting bed and lawn with landscape lighting" },
      ],
    },
    {
      name: "Wooded lakefront",
      line: "Flagstone fire pit and patios, a raised hot tub and naturalistic planting down to the dock.",
      cleared: true,
      dayImage: "images/cards/lakefront-02.webp", nightImage: "", cardW: 900, cardH: 600,
      beforeImage: "",
      images: [
        { src: "images/lakefront-02.webp", caption: "Fire pit with redbuds and perennials", alt: "Render of a flagstone fire pit with redbuds and perennial beds, with the lake and dock behind" },
        { src: "images/lakefront-01.webp", caption: "Woodland path to the fire pit", alt: "Render of a stepping-stone path through the woods to a fire pit by the lake" },
        { src: "images/lakefront-03.webp", caption: "Hot tub patio", alt: "Render of a flagstone patio with a raised hot tub and layered planting" },
        { src: "images/lakefront-04.webp", caption: "Flagstone lounge and path", alt: "Render of a flagstone lounge looking back toward the house along a stepping-stone path" },
        { src: "images/lakefront-05.webp", caption: "Plan view", alt: "Top-down aerial render of the property with the dock, fire pit area, driveway and shoreline", plan: true },
      ],
    },
  ],
};

/* ==========================================================================
   You shouldn't need to edit below this line.
   ========================================================================== */

(function () {
  "use strict";

  var SITE_URL = "https://kimdeegeo.github.io/overyard-website/";
  var THEME_KEY = "overyard-theme";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- helpers ----------
  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, CONFIG);
  }
  function isEmpty(v) { return v === undefined || v === null || v === "" || v === 0 || v === false || v === "#" || (Array.isArray(v) && !v.length); }
  function money(n) { return "$" + Number(n).toLocaleString("en-US"); }
  function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function hide(el) { (el.closest("[data-cfg-block]") || el).hidden = true; }
  function onReady(fn) { if (document.readyState !== "loading") fn(); else document.addEventListener("DOMContentLoaded", fn); }
  function joinList(arr, word) {
    if (arr.length < 2) return arr.join("");
    return arr.slice(0, -1).join(", ") + " " + word + " " + arr[arr.length - 1];
  }

  // ---------- Values worked out from the config ----------
  var pkgList = Object.keys(CONFIG.packages).map(function (k) { return CONFIG.packages[k]; });
  var days = pkgList.reduce(function (a, p) { return a.concat((String(p.days).match(/\d+/g) || []).map(Number)); }, []);
  var rounds = pkgList.map(function (p) { return p.rounds; }).filter(Boolean);
  CONFIG.computed = {
    turnaroundRange: days.length ? Math.min.apply(null, days) + " to " + Math.max.apply(null, days) + " business days" : "",
    revisionRange: rounds.length ? Math.min.apply(null, rounds) + " to " + Math.max.apply(null, rounds) + " revision rounds" : "",
    fromPrice: Math.min.apply(null, pkgList.map(function (p) { return p.founding; }).concat([CONFIG.seed.price || Infinity])),
    seedPrice: CONFIG.seed.price ? money(CONFIG.seed.price) : "",
    creditMix: pkgList.map(function (p) { return p.name + " " + p.credits; }).join(", "),
  };

  /* ======================================================================
     THEME (dark default, light toggle). The <head> script applies the
     saved theme before paint; this wires up the button and theme-color.
     ====================================================================== */
  function currentTheme() { return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"; }
  function applyTheme(theme, save) {
    document.documentElement.setAttribute("data-theme", theme);
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#F5F6F2" : "#121512");
    $$(".theme-toggle").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(theme === "light"));
      btn.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
    });
    if (save) { try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* storage blocked */ } }
  }
  function initTheme() {
    applyTheme(currentTheme(), false);
    $$(".theme-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () { applyTheme(currentTheme() === "light" ? "dark" : "light", true); });
    });
  }

  /* ======================================================================
     FILL CONFIG VALUES INTO THE PAGE
     The HTML holds default text; these attributes update it from CONFIG.
     data-cfg="path"            → text
     data-cfg-money="path"      → $1,249
     data-cfg-count="path" data-one="render" data-many="renders" → "6 renders"
     data-cfg-list="path" data-join=" · " (or data-join-word="and")
     data-cfg-percredit="memberships.forest" → "$162 per credit"
     data-cfg-if / -unless      → show only if value set / empty
     Empty values hide the element (or its nearest [data-cfg-block]).
     ====================================================================== */
  function fillConfig() {
    $$("[data-cfg]").forEach(function (el) {
      var v = get(el.dataset.cfg);
      if (isEmpty(v)) hide(el); else { el.textContent = v; el.hidden = false; }  // optional lines ship hidden
    });
    $$("[data-cfg-money]").forEach(function (el) {
      var v = get(el.dataset.cfgMoney);
      if (isEmpty(v) || v === Infinity) hide(el); else el.textContent = money(v);
    });
    $$("[data-cfg-count]").forEach(function (el) {
      var v = get(el.dataset.cfgCount);
      if (isEmpty(v)) hide(el); else el.textContent = plural(v, el.dataset.one, el.dataset.many);
    });
    $$("[data-cfg-list]").forEach(function (el) {
      var v = get(el.dataset.cfgList);
      if (isEmpty(v)) { hide(el); return; }
      el.textContent = el.dataset.joinWord ? joinList(v, el.dataset.joinWord) : v.join(el.dataset.join || ", ");
    });
    $$("[data-cfg-percredit]").forEach(function (el) {
      var m = get(el.dataset.cfgPercredit);
      if (!m || !m.founding || !m.credits) hide(el); else el.textContent = money(Math.round(m.founding / m.credits)) + " per credit";
    });
    $$("[data-cfg-if]").forEach(function (el) { if (isEmpty(get(el.dataset.cfgIf))) hide(el); });
    $$("[data-cfg-unless]").forEach(function (el) { if (!isEmpty(get(el.dataset.cfgUnless))) hide(el); });

    // Plain-text email
    $$("[data-email-text]").forEach(function (el) {
      var block = el.closest("[data-cfg-block]") || el;
      if (!CONFIG.email) { block.hidden = true; return; }
      el.textContent = CONFIG.email;
      block.hidden = false;
    });

    // Booking, sample PDF, portal: links appear only when set (they ship hidden)
    function showLink(sel, url) {
      $$(sel).forEach(function (el) {
        if (!url) { el.hidden = true; return; }
        el.href = url; el.target = "_blank"; el.rel = "noopener"; el.hidden = false;
      });
    }
    showLink("[data-booking]", CONFIG.bookingUrl);
    showLink("[data-sample-pdf]", CONFIG.samplePackagePdf);
    showLink("[data-portal]", CONFIG.portalUrl);

    // WhatsApp
    $$("[data-whatsapp]").forEach(function (el) {
      var w = CONFIG.whatsapp || {};
      if (!w.display || !w.url) { hide(el); return; }
      el.href = w.url; el.target = "_blank"; el.rel = "noopener";
      var num = el.querySelector(".wa-number");
      if (num) num.textContent = w.display;
    });

    // Social icons: empty = muted "Coming soon"; set = real link
    $$("[data-social]").forEach(function (el) {
      var key = el.dataset.social, url = CONFIG[key + "Url"], name = el.dataset.name || key;
      if (!url) return; // stays as the muted "Coming soon" icon
      var a = document.createElement("a");
      a.className = "social";
      a.href = url; a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", "Overyard on " + name);
      a.innerHTML = el.innerHTML;
      el.replaceWith(a);
    });

    // Seed option in the form shows the configured price
    var seedOpt = $('#f-topic option[value="seed"]');
    if (seedOpt && CONFIG.seed.price) seedOpt.textContent = "Start a " + money(CONFIG.seed.price) + " Seed Project";

    var year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ======================================================================
     HERO CAMERA ROLL
     ====================================================================== */
  function initCameraRoll() {
    var roll = $(".roll");
    var slides = (CONFIG.heroSlides || []).filter(function (s) { return s && s.src; });
    if (!roll || !slides.length) return;

    var stage = $(".roll-stage", roll), tag = $(".roll-tag", roll), strip = $(".filmstrip");
    var toggle = $(".roll-toggle", roll);
    var interval = (CONFIG.heroInterval || 6) * 1000;

    // First slide is already in the HTML (preloaded). Sync it with config.
    var first = $(".roll-img", stage);
    first.src = slides[0].src; first.alt = slides[0].alt || ""; first.width = slides[0].w; first.height = slides[0].h;
    tag.textContent = slides[0].label || "";

    // Reduced motion or a single slide: show the first slide only
    if (reduceMotion || slides.length < 2) {
      if (strip) strip.hidden = true;
      if (toggle) toggle.hidden = true;
      return;
    }

    // Build the remaining slides (lazy) and the filmstrip
    var imgs = [first];
    slides.slice(1).forEach(function (s) {
      var img = document.createElement("img");
      img.className = "roll-img";
      img.alt = s.alt || ""; img.loading = "lazy"; img.decoding = "async";
      img.width = s.w || 2000; img.height = s.h || 1125;
      img.dataset.src = s.src;               // set src just before it's shown
      stage.appendChild(img);
      imgs.push(img);
    });
    strip.innerHTML = slides.map(function (s, i) {
      return '<li><button type="button" class="frame" data-i="' + i + '" aria-label="Show render ' + (i + 1) + ": " + esc(s.label || "") + '">' +
        '<img src="' + esc(s.thumb || s.src) + '" alt="" width="240" height="135" loading="lazy" decoding="async">' +
        '<span class="frame-num">' + String(i + 1).padStart(2, "0") + " · " + (s.time === "night" ? "N" : "D") + "</span>" +
        '<span class="frame-progress" aria-hidden="true"></span></button></li>';
    }).join("");
    strip.hidden = false;
    toggle.hidden = false;
    var frames = $$(".frame", strip);

    var index = 0, timer = null, userPaused = false, hoverPaused = false;
    function load(i) { var im = imgs[i]; if (im.dataset.src) { im.src = im.dataset.src; delete im.dataset.src; im.loading = "eager"; } }
    function show(i) {
      index = (i + slides.length) % slides.length;
      load(index); load((index + 1) % slides.length);
      imgs.forEach(function (im, j) { im.classList.toggle("is-active", j === index); });
      frames.forEach(function (f, j) {
        f.classList.toggle("is-active", j === index);
        f.setAttribute("aria-current", j === index ? "true" : "false");
      });
      tag.textContent = slides[index].label || "";
      schedule();
    }
    function running() { return !userPaused && !hoverPaused && !document.hidden; }
    function schedule() {
      clearTimeout(timer);
      roll.classList.toggle("is-paused", !running());
      strip.classList.toggle("is-paused", !running());
      // restart the progress animation on the active frame
      frames.forEach(function (f) { f.classList.remove("is-running"); });
      if (!running()) return;
      void strip.offsetWidth;
      frames[index].classList.add("is-running");
      timer = setTimeout(function () { show(index + 1); }, interval);
    }
    function setUserPaused(p) {
      userPaused = p;
      toggle.setAttribute("aria-pressed", String(p));
      toggle.setAttribute("aria-label", p ? "Play slideshow" : "Pause slideshow");
      schedule();
    }

    strip.style.setProperty("--roll-ms", interval + "ms");
    frames.forEach(function (f) { f.addEventListener("click", function () { show(Number(f.dataset.i)); }); });
    toggle.addEventListener("click", function () { setUserPaused(!userPaused); });
    roll.addEventListener("mouseenter", function () { hoverPaused = true; schedule(); });
    roll.addEventListener("mouseleave", function () { hoverPaused = false; schedule(); });
    document.addEventListener("visibilitychange", schedule);

    // Arrow keys when focus is inside the roll or filmstrip
    function onKey(e) {
      if (e.key === "ArrowRight") { e.preventDefault(); show(index + 1); var f = frames[index]; if (strip.contains(document.activeElement)) f.focus(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); show(index - 1); var g = frames[index]; if (strip.contains(document.activeElement)) g.focus(); }
    }
    roll.addEventListener("keydown", onKey);
    strip.addEventListener("keydown", onKey);

    // Swipe on the frame
    var sx = null, sy = null;
    stage.addEventListener("pointerdown", function (e) { sx = e.clientX; sy = e.clientY; });
    stage.addEventListener("pointerup", function (e) {
      if (sx === null) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      sx = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
    });

    show(0);
  }

  /* ======================================================================
     BEFORE/AFTER SLIDER (native range input = keyboard, touch, screen reader)
     labels: [left, right], e.g. ["Before", "After"] or ["Plan", "View"]
     ====================================================================== */
  function buildBeforeAfter(leftSrc, rightSrc, alt, eager, labels) {
    labels = labels || ["Before", "After"];
    var wrap = document.createElement("div");
    wrap.className = "ba";
    var loading = eager ? "eager" : "lazy";
    wrap.innerHTML =
      '<img class="ba-after" src="' + esc(rightSrc) + '" alt="' + esc(labels[1] + ": " + alt) + '" loading="' + loading + '" decoding="async">' +
      '<img class="ba-before" src="' + esc(leftSrc) + '" alt="' + esc(labels[0] + ": " + alt) + '" loading="' + loading + '" decoding="async">' +
      '<span class="ba-label ba-label-before" aria-hidden="true">' + esc(labels[0]) + "</span>" +
      '<span class="ba-label ba-label-after" aria-hidden="true">' + esc(labels[1]) + "</span>" +
      '<span class="ba-handle" aria-hidden="true"></span>' +
      '<input class="ba-range" type="range" min="0" max="100" value="50" aria-label="' + esc(labels[0] + " and " + labels[1].toLowerCase()) + ' comparison. Use arrow keys to move the divider.">';
    var range = wrap.querySelector(".ba-range");
    range.addEventListener("input", function () {
      wrap.style.setProperty("--pos", range.value + "%");
      range.setAttribute("aria-valuetext", range.value + "% " + labels[0].toLowerCase() + " shown");
    });
    return wrap;
  }

  /* ======================================================================
     WORK: featured slider + bento grid (cleared projects only)
     ====================================================================== */
  var shownProjects = CONFIG.projects.filter(function (p) { return p.cleared && p.images && p.images.length; });

  function renderFeatured() {
    var holder = $("#featured-slider");
    if (!holder) return;
    var f = CONFIG.featured || {};
    var p = shownProjects.filter(function (x) { return x.name === f.project; })[0];
    if (!p || !f.plan || !f.view) { hide(holder); return; }
    var box = $(".featured-media", holder);
    box.appendChild(buildBeforeAfter(f.plan, f.view, p.name, false, ["Plan", "View"]));
    var name = $(".featured-name", holder);
    if (name) name.textContent = p.name;
  }

  var CROPS = '<i class="cm cm-tl"></i><i class="cm cm-tr"></i><i class="cm cm-bl"></i><i class="cm cm-br"></i>';

  function renderWork() {
    var grid = $("#work-grid");
    if (!grid) return;
    if (!shownProjects.length) { hide(grid); return; }
    grid.innerHTML = shownProjects.map(function (p, i) {
      var day = p.dayImage || (p.images[0] && p.images[0].src);
      var night = p.nightImage || "";
      var start = day || night;
      var sheet = "P-" + String(i + 1).padStart(2, "0");
      var count = p.images.length + (p.beforeImage ? 1 : 0);
      var toggle = day && night
        ? '<div class="dn" role="group" aria-label="Day or night render">' +
            '<button type="button" class="dn-btn" data-src="' + esc(day) + '" aria-pressed="true">Day</button>' +
            '<button type="button" class="dn-btn" data-src="' + esc(night) + '" aria-pressed="false">Night</button></div>'
        : "";
      return '<article class="work-card' + (i === 0 ? " is-large" : "") + ' wipe">' +
        '<div class="work-media">' + CROPS +
          '<div class="media"><img src="' + esc(start) + '" alt="' + esc(p.images.filter(function (im) { return !im.photo; })[0].alt) + '" width="' + (p.cardW || 900) + '" height="' + (p.cardH || 506) + '" loading="lazy" decoding="async"></div>' +
          toggle +
        "</div>" +
        '<div class="work-body">' +
          '<p class="label">' + sheet + " · " + esc(p.name) + "</p>" +
          "<h3>" + esc(p.name) + "</h3>" +
          "<p>" + esc(p.line) + "</p>" +
          '<button class="work-open" type="button" aria-haspopup="dialog" data-index="' + i + '">View sheets <span class="label">' + count + "</span></button>" +
        "</div></article>";
    }).join("");

    // Day / Night toggles
    grid.addEventListener("click", function (e) {
      var btn = e.target.closest(".dn-btn");
      if (!btn) return;
      var card = btn.closest(".work-card"), img = $(".media img", card);
      img.src = btn.dataset.src;
      $$(".dn-btn", card).forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
    });
  }

  // What you receive: 2D plan + 2 renders
  function renderDeliverables() {
    var wrap = $("#deliverables-media");
    if (!wrap) return;
    var p = shownProjects.filter(function (x) { return x.name === CONFIG.receiveProject; })[0] || shownProjects[0];
    if (!p) { hide(wrap); return; }
    var plan = p.images.filter(function (im) { return im.plan; })[0];
    var renders = p.images.filter(function (im) { return !im.plan && !im.photo; }).slice(0, 2);
    var items = [];
    var planSrc = CONFIG.samplePlan || (plan && plan.src);
    if (planSrc) items.push({ src: planSrc, w: CONFIG.samplePlan ? 928 : 2000, h: CONFIG.samplePlan ? 1152 : 1125, alt: "2D landscape plan sheet with pool, spa, lawn, stepping pads and planting", label: "Sheet L-101 · 2D plan", plan: true });
    renders.forEach(function (r, i) { items.push({ src: r.src, w: 2000, h: 1125, alt: r.alt, label: "Sheet R-0" + (i + 1) + " · 3D render" }); });
    wrap.innerHTML = items.map(function (it) {
      return '<figure class="sheet' + (it.plan ? " is-plan" : "") + '">' +
        '<div class="media"><img src="' + esc(it.src) + '" alt="' + esc(it.alt) + '" width="' + it.w + '" height="' + it.h + '" loading="lazy" decoding="async"></div>' +
        '<figcaption class="label">' + esc(it.label) + "</figcaption></figure>";
    }).join("");
  }

  // How it works images (or plan-symbol placeholders)
  function renderProcess() {
    $$(".process-card").forEach(function (card, i) {
      var src = (CONFIG.processImages || [])[i];
      var media = $(".process-media", card);
      if (!src || !media) return;  // placeholder SVG stays
      var img = document.createElement("img");
      img.src = src; img.alt = media.dataset.alt || "";
      img.width = 928; img.height = 1152; img.loading = "lazy"; img.decoding = "async";
      media.innerHTML = "";
      media.appendChild(img);
      media.classList.add("has-img");
    });
  }

  /* ======================================================================
     NIGHT BAND (image from config + subtle parallax on desktop)
     ====================================================================== */
  function initBand() {
    var band = $(".band");
    if (!band) return;
    var img = $(".band-img", band);
    if (CONFIG.bandImage && img) img.src = CONFIG.bandImage;
    if (reduceMotion || !img) return;
    var desktop = window.matchMedia("(min-width: 900px)");
    var ticking = false;
    function update() {
      ticking = false;
      if (!desktop.matches) { img.style.transform = ""; return; }
      var r = band.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      // background moves at 0.85x the scroll speed → offset of 15% of scroll distance
      img.style.transform = "translate3d(0," + (-r.top * 0.15).toFixed(1) + "px,0)";
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ======================================================================
     LIGHTBOX GALLERY (swipe, arrows, Esc, counter, focus trap)
     ====================================================================== */
  function initLightbox() {
    var box = $("#lightbox");
    if (!box || typeof box.showModal !== "function") return;
    var stage = $(".lb-stage", box), titleEl = $(".lb-title", box), captionEl = $(".lb-caption", box);
    var counterEl = $(".lb-counter", box), prevBtn = $(".lb-prev", box), nextBtn = $(".lb-next", box), closeBtn = $(".lb-close", box);
    var slides = [], index = 0, opener = null;

    function slidesFor(p) {
      var list = [];
      var firstRender = p.images.filter(function (im) { return !im.photo; })[0];
      if (p.beforeImage && firstRender) list.push({ type: "ba", before: p.beforeImage, after: firstRender.src, alt: firstRender.alt, caption: "Before and after: drag to compare" });
      p.images.forEach(function (im) { list.push({ type: "img", src: im.src, alt: im.alt, caption: im.caption || "" }); });
      return list;
    }
    function preload(i) { var s = slides[i]; if (s && s.type === "img") { var im = new Image(); im.src = s.src; } }
    function render() {
      var s = slides[index];
      stage.innerHTML = "";
      if (s.type === "ba") stage.appendChild(buildBeforeAfter(s.before, s.after, s.alt, true));
      else {
        var img = document.createElement("img");
        img.src = s.src; img.alt = s.alt; img.className = "lb-img";
        stage.appendChild(img);
      }
      captionEl.textContent = s.caption;
      counterEl.textContent = (index + 1) + " / " + slides.length;
      prevBtn.disabled = nextBtn.disabled = slides.length < 2;
      preload((index + 1) % slides.length);
      preload((index - 1 + slides.length) % slides.length);
    }
    function go(step) {
      if (slides.length < 2) return;
      index = (index + step + slides.length) % slides.length;
      render();
    }
    function open(p, btn) {
      slides = slidesFor(p);
      if (!slides.length) return;
      index = 0; opener = btn;
      titleEl.textContent = p.name;
      render();
      box.showModal();
      document.documentElement.classList.add("lb-open");
      closeBtn.focus();
      track("open_project", { project: p.name });
    }

    var grid = $("#work-grid");
    if (grid) grid.addEventListener("click", function (e) {
      if (e.target.closest(".dn")) return;
      var btn = e.target.closest(".work-open");
      var media = e.target.closest(".work-media");
      if (!btn && media) btn = $(".work-open", media.closest(".work-card"));  // clicking the picture opens it too
      if (btn) open(shownProjects[Number(btn.dataset.index)], btn);
    });

    prevBtn.addEventListener("click", function () { go(-1); });
    nextBtn.addEventListener("click", function () { go(1); });
    closeBtn.addEventListener("click", function () { box.close(); });
    box.addEventListener("close", function () {
      stage.innerHTML = "";
      document.documentElement.classList.remove("lb-open");
      if (opener) opener.focus();
    });
    box.addEventListener("click", function (e) { if (e.target === box || e.target === stage) box.close(); });
    box.addEventListener("keydown", function (e) {
      var onRange = e.target.classList && e.target.classList.contains("ba-range");
      if (e.key === "ArrowRight" && !onRange) { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft" && !onRange) { e.preventDefault(); go(-1); }
      if (e.key === "Tab") {
        var f = $$("button, input, [href]", box).filter(function (el) { return !el.disabled && el.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    var startX = null, startY = null;
    stage.addEventListener("pointerdown", function (e) {
      if (e.target.classList.contains("ba-range")) return;
      startX = e.clientX; startY = e.clientY;
    });
    stage.addEventListener("pointerup", function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX, dy = e.clientY - startY;
      startX = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    });
  }

  /* ======================================================================
     HEADER, REVEALS, VIDEO, MOBILE CTA
     ====================================================================== */
  function initHeader() {
    var toggle = $(".nav-toggle"), nav = $("#site-nav");
    if (toggle && nav) {
      var closeMenu = function () { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); };
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      $$("a", nav).forEach(function (a) { a.addEventListener("click", closeMenu); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
    }
    var header = $(".site-header");
    if (header) {
      var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  // Content is always visible. Elements that START below the fold get a short
  // rise-in (.reveal) or clip-path wipe (.wipe) the first time they enter view.
  function initReveal() {
    if (!("IntersectionObserver" in window) || reduceMotion) return;
    var first = true;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (!first) entry.target.classList.add("is-revealed");
        io.unobserve(entry.target);
      });
      first = false;
    }, { rootMargin: "0px 0px -6% 0px" });
    $$(".reveal, .wipe").forEach(function (el) { io.observe(el); });
  }

  function initVideo() {
    var wrap = $("[data-walkthrough]");
    if (!wrap) return;
    if (!CONFIG.walkthroughVideo) { wrap.hidden = true; return; }
    var video = wrap.querySelector("video");
    if (CONFIG.walkthroughPoster) video.poster = CONFIG.walkthroughPoster;
    var go = function () {
      video.src = CONFIG.walkthroughVideo;
      if (!reduceMotion) video.play().catch(function () {});
    };
    if (!("IntersectionObserver" in window)) { go(); return; }
    var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io.disconnect(); go(); } }, { rootMargin: "600px 0px" });
    io.observe(wrap);
  }

  function initMobileCta() {
    var bar = $(".mobile-cta"), hero = $(".hero"), contact = $("#contact");
    if (!bar || !hero || !contact || !("IntersectionObserver" in window)) return;
    var pastHero = false, atContact = false;
    function update() { bar.classList.toggle("is-visible", pastHero && !atContact); }
    new IntersectionObserver(function (e) { pastHero = !e[0].isIntersecting; update(); }).observe(hero);
    new IntersectionObserver(function (e) { atContact = e[0].isIntersecting; update(); }, { threshold: 0.05 }).observe(contact);
  }

  /* ======================================================================
     CONTACT FORM (Web3Forms)
     ====================================================================== */
  function initForm() {
    var form = $("#contact-form");
    // Buttons with data-topic pre-select "What do you need?" and pre-fill a note
    document.addEventListener("click", function (e) {
      var link = e.target.closest("[data-topic]");
      if (!link || !form) return;
      var topic = $("#f-topic");
      topic.value = link.dataset.topic;
      var pkg = link.dataset.package, msg = $("#f-message");
      var note = link.dataset.note || (pkg ? (link.dataset.topic === "quote" ? "I'd like to start with " + pkg + "." : "I'm interested in " + pkg + ".") : "");
      if (note && msg && (!msg.value || msg.dataset.prefilled === msg.value)) {
        msg.value = note;
        msg.dataset.prefilled = note;
      }
    });
    if (!form) return;

    var status = $(".form-status", form), topicSel = $("#f-topic"), button = $("button[type=submit]", form);
    function setStatus(kind, text) { status.className = "form-status is-" + kind; status.textContent = text; }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      $$("input[required], textarea[required], input[type=email]", form).forEach(function (input) {
        var ok = input.checkValidity() && (!input.required || input.value.trim() !== "");
        input.classList.toggle("is-invalid", !ok);
        input.setAttribute("aria-invalid", String(!ok));
        if (!ok && !firstBad) firstBad = input;
      });
      if (firstBad) { setStatus("error", "Please fill in the highlighted fields."); firstBad.focus(); return; }
      if ($("[name=botcheck]", form).checked) return; // honeypot

      if (!CONFIG.web3formsKey) {
        setStatus("error", "The form isn't connected yet." +
          (CONFIG.whatsapp && CONFIG.whatsapp.display ? " Please message us on WhatsApp at " + CONFIG.whatsapp.display + "." :
          CONFIG.email ? " Please email " + CONFIG.email + " instead." : ""));
        return;
      }
      var data = Object.fromEntries(new FormData(form).entries());
      data.access_key = CONFIG.web3formsKey;
      data.subject = "Overyard: " + topicSel.options[topicSel.selectedIndex].text + " (" + (data.company || data.name) + ")";
      data.from_name = "Overyard website";
      delete data.botcheck;

      button.disabled = true;
      setStatus("pending", "Sending…");
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (res) { return res.json().then(function (j) { return { ok: res.ok && j.success, j: j }; }); })
        .then(function (r) {
          if (!r.ok) throw new Error(r.j && r.j.message);
          form.reset();
          setStatus("success", "Thanks. Kim Daryl has your project" + (CONFIG.replyHours ? " and will reply within " + CONFIG.replyHours + " hours." : " and will reply soon."));
          track("generate_lead", { topic: data.topic });
        })
        .catch(function () {
          setStatus("error", "Something went wrong sending the form." + (CONFIG.email ? " Please email " + CONFIG.email + "." : " Please try again."));
        })
        .finally(function () { button.disabled = false; });
    });
  }

  /* ======================================================================
     ANALYTICS + STRUCTURED DATA
     ====================================================================== */
  function addAnalytics() {
    if (CONFIG.ga4Id) {
      var g = document.createElement("script");
      g.async = true;
      g.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(CONFIG.ga4Id);
      document.head.appendChild(g);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", CONFIG.ga4Id);
    }
    if (CONFIG.clarityId) {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", CONFIG.clarityId);
    }
  }
  function track(name, params) { if (window.gtag) window.gtag("event", name, params || {}); }

  function addSchema() {
    if (!$("#main.home")) return;
    var data = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Overyard",
      "url": SITE_URL,
      "logo": SITE_URL + "assets/logo-light.svg",
      "image": SITE_URL + "images/hero-01.webp",
      "description": "White-label and co-branded landscape design for landscape, hardscape, pool and outdoor-living contractors: 2D plans, 3D renders and material takeoffs.",
      "areaServed": [{ "@type": "Country", "name": "United States" }, { "@type": "Country", "name": "Australia" }],
      "priceRange": "$" + CONFIG.computed.fromPrice + "+",
    };
    if (CONFIG.email) data.email = CONFIG.email;
    if (CONFIG.whatsapp && CONFIG.whatsapp.display) data.telephone = CONFIG.whatsapp.display;
    var sameAs = ["facebook", "instagram", "tiktok", "youtube", "linkedin"].map(function (k) { return CONFIG[k + "Url"]; }).filter(Boolean);
    if (sameAs.length) data.sameAs = sameAs;
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  // ---------- start ----------
  onReady(function () {
    initTheme();
    renderFeatured();
    renderWork();
    renderDeliverables();
    renderProcess();
    fillConfig();
    addSchema();
    addAnalytics();
    initHeader();
    initCameraRoll();
    initBand();
    initReveal();
    initLightbox();
    initVideo();
    initMobileCta();
    initForm();
  });
})();
