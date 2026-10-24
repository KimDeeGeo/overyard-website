/* ==========================================================================
   OVERYARD: SITE SETTINGS  (edit this block)

   Every price, number, link, image list and ID on the site comes from here.
   The HTML already contains these default values (so link previews and
   crawlers see real text); this block updates them when you change them.
   Leave a value empty ("") or 0 to HIDE whatever uses it, so placeholder
   text never shows on the live site.

   Project details (title, captions, cleared, featured) are NOT here: each
   project has its own images/projects/<slug>/project.json.
   ========================================================================== */
const CONFIG = {

  // ---- Contact and booking ----
  email: "sales@overyarddesign.com", // shown as a mailto link in Contact, the footer and the legal pages ("" = hidden)
  bookingUrl: "https://calendly.com/overyarddesign-sales/overyard-discovery-call", // Calendly, Alejandro (opens in a new tab; "" = hidden)
  web3formsKey: "5ad681f6-a7ef-4ddb-870b-76eb54c058eb", // Web3Forms access key (public by design; mail goes to sales@). "" = form shows a WhatsApp fallback.
  replyHours: 12,         // "Alejandro replies within 12 hours"
  callMinutes: 30,        // "Book a 30-minute call" (match the Calendly event length)
  whatsapp: {
    display: "+63 976 373 0461",            // shown on the page ("" = hidden)
    url: "https://wa.me/639763730461",      // opens WhatsApp in a new tab
  },
  portalUrl: "",          // "Client login" link in the header (hidden when empty)

  // ---- Social links ----
  // All five icons always show. Empty = muted icon with a "Coming soon" tooltip.
  facebookUrl: "",
  instagramUrl: "",
  tiktokUrl: "",
  youtubeUrl: "",
  linkedinUrl: "",

  // ---- Analytics (scripts only load when an ID is set) ----
  ga4Id: "G-RZK9MSXNHQ",    // Google Analytics 4 Measurement ID
  clarityId: "z2yr7rdrmx",  // Microsoft Clarity Project ID

  // ---- Team ----
  edmondTools: ["Realtime Landscaping Architect", "SketchUp", "Lumion", "D5 Render"],

  // ---- Price ladder ----
  // New clients pay the price of the tier they join in, by member count.
  // membersSoFar = paying members/clients so far. The site shows the current
  // tier's prices (large) and the next tier's prices ("Next price ...").
  // The last tier is the regular list price, shown struck through.
  membersSoFar: 0,
  foundingDeadline: "2027-04-30",   // founding tier ends on this date even if spots remain
  foundingLockMonths: 6,            // founding members keep founding rates this long (while active)
  priceLadder: [
    { upTo: 5,  name: "Founding",      seed: 199, sprout: 199, grove: 399, canopy: 799,  orchard: 699,  forest: 1299, oldGrowth: 2399 },
    { upTo: 10, name: "Members 6–10",  seed: 229, sprout: 229, grove: 459, canopy: 919,  orchard: 799,  forest: 1499, oldGrowth: 2759 },
    { upTo: 20, name: "Members 11–20", seed: 265, sprout: 259, grove: 529, canopy: 1059, orchard: 919,  forest: 1729, oldGrowth: 3179 },
    { upTo: Infinity, name: "Regular", seed: 325, sprout: 349, grove: 649, canopy: 1249, orchard: 1099, forest: 1999, oldGrowth: 3699 },
  ],
  nextPriceKeys: ["grove", "orchard", "forest"],  // prices named in the "Next price" line

  // ---- Seed Project (first project, one per company) ----
  seed: {
    scope: "Grove",
    guarantee: "If the design misses the brief after the included revisions, you get a full refund.",
  },
  seedJoinWindowDays: 14, // join as a Founding Root within X days of Seed delivery
  seedCreditDays: 7,      // join a membership within X days and the Seed price is credited
  currencyNote: "All prices in USD.",

  // ---- Single projects (prices come from the ladder) ----
  packages: {
    sprout: { name: "Sprout", credits: 1, plan: "2D site and planting plan",
      renders: 10, walkthrough: "", rounds: 1, takeoff: false, days: "3 business days" },
    grove:  { name: "Grove", credits: 2, plan: "2D plan + planting schedule",
      renders: 15, walkthrough: "", rounds: 2, takeoff: false, days: "5 business days" },
    canopy: { name: "Canopy", credits: 4, plan: "Full plan set",
      renders: 20, walkthrough: "60–90 sec walkthrough video", rounds: 3, takeoff: true, days: "7–10 business days" },
  },
  // Project size guide (whichever is higher, budget or area, sets the tier)
  sizeGuide: [
    { tier: "Sprout", budget: "Up to $75k", area: "Up to 1,500 sq ft" },
    { tier: "Grove", budget: "$75k – $250k", area: "Up to 5,000 sq ft" },
    { tier: "Canopy", budget: "$250k – $750k", area: "Up to 15,000 sq ft" },
    { tier: "Canopy Plus", budget: "Above $750k", area: "Above 15,000 sq ft" },
  ],
  canopyPlus: { step: 300, per: "$250k" },   // Canopy price + $300 per extra $250k of build budget (or part)

  // ---- Evergreen memberships (prices come from the ladder) ----
  memberships: {
    orchard:   { name: "Orchard", credits: 4, activeProjects: 1 },
    forest:    { name: "Forest", credits: 8, activeProjects: 2 },
    oldGrowth: { name: "Old Growth", credits: 16, activeProjects: 4 },
  },

  // ---- Add-ons ----
  addons: {
    takeoff: 75,
    takeoffMembers: 49,
    extraRound: 49,
    extraRenders: 49,        // "5 extra renders · $49"
    rush: "+50%",
    redesign: "Quoted as a new project",
  },

  // ---- Work: project folders, in display order ----
  // Each folder needs images/projects/<slug>/project.json. A project shows
  // only if its project.json says "cleared": true. The home page shows up to
  // 6 projects with "featured": true (priority projects, in this order);
  // portfolio.html shows every cleared project.
  homeProjectCount: 6,
  projects: [
    // Priority (featured: true). The first 6 appear on the home page.
    "pool-courtyard-citrus",
    "modern-pool-courtyard",
    "lake-house-woodland",
    "stone-pool-pergola",
    "front-walk-planting",
    "cottage-front-yard",
    "lakeside-fire-pit-terrace",
    "freeform-pool-deck",
    "brick-patio-spa",
    "pool-deck-fire-lounge",
    // Not priority (featured: false): portfolio page only
    "mountain-modern-estate",
    "hill-country-infinity-pool",
    "french-country-pool-estate",
    "contemporary-pool-water-wall",
    "mountain-lakefront-pool",
    "hillside-infinity-pool",
    "pool-spa-pergola-kitchen",
    "modern-pool-covered-patio",
    "barn-house-fire-terrace",
    "french-cottage-garden-pool",
    "mediterranean-pool-olive-tree",
    "mediterranean-pool-courtyard",
    "lakeside-curved-terrace",
    "hillside-terraced-steps",
    "wooded-lake-house-terraces",
    "brick-cottage-perennial-garden",
    "pollinator-garden-paths",
    "cottage-garden-cabin",
    "modern-front-entry-garden",
    "ranch-front-yard-pergola",
    "desert-side-yard-fire-pit",
    "desert-boulder-garden",
    "xeriscape-putting-green",
    "pool-walkout-putting-green",
    "georgian-pool-sport-court",
    "modern-pool-tanning-ledge",
    "rectangular-pool-ranch",
    "hillside-pool-conifer-screen",
    "modern-farmhouse-plunge-pool",
    "fire-pit-swing-pergola",
    "modern-pergola-backyard",
    "mid-century-tree-decks",
    "commercial-fire-bowl-courtyard",
  ],

  // ---- Hero camera roll ----
  // Priority projects only. Start with a night render, then alternate.
  // Each src needs the -md (900px) and -sm (320px) versions next to it,
  // which scripts/images.mjs makes automatically.
  heroSlides: [
    { src: "images/projects/modern-pool-courtyard/pool-on-axis-with-the-pergola-fire-lounge-night.webp", time: "night", w: 2000, h: 1125,
      label: "Sheet R-01 · 3D render · Modern pool courtyard · Night", alt: "Night render of a long pool on axis with a lit pergola fire lounge" },
    { src: "images/projects/pool-courtyard-citrus/fire-lounge-under-the-citrus-trees-day.webp", time: "day", w: 2000, h: 1125,
      label: "Sheet R-02 · 3D render · Citrus fire lounge · Day", alt: "Render of a fire lounge under citrus trees beside a pool courtyard" },
    { src: "images/projects/lake-house-woodland/fire-pit-circle-under-the-redbuds-night.webp", time: "night", w: 2000, h: 1332,
      label: "Sheet R-03 · 3D render · Lake house woodland · Dusk", alt: "Dusk render of a fire pit circle under flowering redbuds" },
    { src: "images/projects/stone-pool-pergola/pool-and-pergola-day.webp", time: "day", w: 2000, h: 1125,
      label: "Sheet R-04 · 3D render · Stone pool and pergola · Day", alt: "Render of a stone-coped pool beside a timber pergola" },
    { src: "images/projects/pool-courtyard-citrus/fire-lounge-under-the-citrus-trees-night.webp", time: "night", w: 2000, h: 1125,
      label: "Sheet R-05 · 3D render · Citrus fire lounge · Night", alt: "Night render of a fire lounge under uplit citrus trees" },
    { src: "images/projects/front-walk-planting/stone-steps-up-the-planted-slope-day.webp", time: "day", w: 2000, h: 1125,
      label: "Sheet R-06 · 3D render · Front walk and slope planting · Day", alt: "Render of stone steps climbing a planted front slope" },
    { src: "images/projects/stone-pool-pergola/pool-and-pergola-night.webp", time: "night", w: 2000, h: 1125,
      label: "Sheet R-07 · 3D render · Stone pool and pergola · Night", alt: "Night render of a lit pool and timber pergola" },
    { src: "images/projects/modern-pool-courtyard/pool-on-axis-with-the-pergola-fire-lounge-day.webp", time: "day", w: 2000, h: 1125,
      label: "Sheet R-08 · 3D render · Modern pool courtyard · Day", alt: "Render of a long pool on axis with a slatted pergola fire lounge" },
  ],
  heroInterval: 6,        // seconds per slide

  // ---- Full-width night band (after How it works) ----
  bandImage: "images/projects/pool-courtyard-citrus/stepping-pads-across-the-lawn-to-the-pool-night.webp",

  // ---- How it works images (portrait, ~4:5). "" = plan-symbol placeholder ----
  processImages: [
    "images/process/site-photo-md.webp",   // 01 · Send site info
    "images/process/clay-model-md.webp",   // 02 · We design
    "images/process/night-render-md.webp", // 03 · You revise
    "images/process/plan-sheet-md.webp",   // 04 · You close and build
  ],

  // ---- What you receive (plan sheet + 2 renders) ----
  receive: {
    plan: "images/process/plan-sheet.webp",
    renders: ["images/projects/pool-courtyard-citrus/pool-spa-and-pergola-from-the-lawn-day-md.webp", "images/projects/pool-courtyard-citrus/pool-spa-and-pergola-from-the-lawn-night-md.webp"],
  },

  // ---- Work: featured "From overhead" slider ----
  // Wipes between an overhead render and an eye-level render of the same design.
  featured: {
    project: "pool-courtyard-citrus",
    plan: "images/projects/pool-courtyard-citrus/overhead.webp",
    view: "images/projects/pool-courtyard-citrus/stepping-pads-across-the-lawn-to-the-pool-day.webp",
  },

  // ---- Optional files (leave "" until the file is in the folder) ----
  samplePackagePdf: "",   // e.g. "assets/sample-package.pdf"
  walkthroughVideo: "",   // e.g. "videos/walkthrough-01.mp4"
  walkthroughPoster: "",
};

/* ==========================================================================
   You shouldn't need to edit below this line.
   ========================================================================== */

(function () {
  "use strict";

  var SITE_URL = "https://overyarddesign.com/";
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
  function sized(src, size) { return size ? src.replace(/\.webp$/, "-" + size + ".webp") : src; }
  function joinList(arr, word) {
    if (arr.length < 2) return arr.join("");
    return arr.slice(0, -1).join(", ") + " " + word + " " + arr[arr.length - 1];
  }
  // Set an image's src only when it gets close to the screen. Native lazy
  // loading starts very early on slow phones, which competes with the hero.
  var nearObserver = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      nearObserver.unobserve(e.target);
      $$("img[data-near-src]", e.target).forEach(function (img) { img.src = img.dataset.nearSrc; img.removeAttribute("data-near-src"); });
    });
  }, { rootMargin: "500px 0px" }) : null;
  function loadWhenNear(container) {
    if (nearObserver) nearObserver.observe(container);
    else $$("img[data-near-src]", container).forEach(function (img) { img.src = img.dataset.nearSrc; });
  }
  function afterLoad(fn) {
    var go = function () { setTimeout(fn, 1200); };
    if (document.readyState === "complete") go(); else window.addEventListener("load", go);
  }

  /* ======================================================================
     PRICES FROM THE LADDER
     ====================================================================== */
  var ladder = CONFIG.priceLadder;
  var tierIndex = 0;
  while (tierIndex < ladder.length - 1 && CONFIG.membersSoFar >= ladder[tierIndex].upTo) tierIndex++;
  var foundingOver = CONFIG.foundingDeadline && new Date() > new Date(CONFIG.foundingDeadline + "T23:59:59");
  if (tierIndex === 0 && foundingOver) tierIndex = 1;
  var tier = ladder[tierIndex], nextTier = ladder[tierIndex + 1] || null, regular = ladder[ladder.length - 1];
  var isFounding = tierIndex === 0;

  Object.keys(CONFIG.packages).forEach(function (k) {
    CONFIG.packages[k].price = tier[k];
    CONFIG.packages[k].regular = tier[k] < regular[k] ? regular[k] : 0;  // no strike-through at list price
  });
  Object.keys(CONFIG.memberships).forEach(function (k) {
    CONFIG.memberships[k].price = tier[k];
    CONFIG.memberships[k].regular = tier[k] < regular[k] ? regular[k] : 0;
  });
  CONFIG.seed.price = tier.seed;
  CONFIG.seed.regular = tier.seed < regular.seed ? regular.seed : 0;

  var pkgList = Object.keys(CONFIG.packages).map(function (k) { return CONFIG.packages[k]; });
  var days = pkgList.reduce(function (a, p) { return a.concat((String(p.days).match(/\d+/g) || []).map(Number)); }, []);
  var rounds = pkgList.map(function (p) { return p.rounds; }).filter(Boolean);
  var deadlineText = CONFIG.foundingDeadline ? new Date(CONFIG.foundingDeadline + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "";
  var spotsLeft = Math.max(0, ladder[0].upTo - CONFIG.membersSoFar);
  CONFIG.computed = {
    turnaroundRange: days.length ? Math.min.apply(null, days) + " to " + Math.max.apply(null, days) + " business days" : "",
    revisionRange: rounds.length ? Math.min.apply(null, rounds) + " to " + Math.max.apply(null, rounds) + " revision rounds" : "",
    fromPrice: Math.min.apply(null, pkgList.map(function (p) { return p.price; }).concat([CONFIG.seed.price])),
    seedPrice: money(CONFIG.seed.price),
    creditMix: pkgList.map(function (p) { return p.name + " " + p.credits; }).join(", "),
    tierName: tier.name,
    foundingSpotsLeft: isFounding ? spotsLeft : 0,
    foundingLine: isFounding ? "Founding rates for the first " + ladder[0].upTo + " members" + (deadlineText ? ", until " + deadlineText : "") + "." : "",
    nextPriceLine: nextTier ? (isFounding ? "Next price after founding: " : "Next price: ") +
      CONFIG.nextPriceKeys.map(function (k) { return (CONFIG.packages[k] || CONFIG.memberships[k]).name + " " + money(nextTier[k]); }).join(", ") + "." : "",
    lockLine: CONFIG.foundingLockMonths && ladder[1] ? "Founding members keep founding rates for " + CONFIG.foundingLockMonths +
      " months, then move to the " + ladder[1].name.toLowerCase() + " rate while their membership stays active." : "",
    canopyPlusNote: CONFIG.canopyPlus ? "Canopy price plus " + money(CONFIG.canopyPlus.step) + " for each additional " + CONFIG.canopyPlus.per + " of build budget (or part of it). Custom quote." : "",
    fairUse: "Active projects at a time: " + Object.keys(CONFIG.memberships).map(function (k) { var m = CONFIG.memberships[k]; return m.name + " " + m.activeProjects; }).join(" · ") +
      ". Credits cover Sprout to Canopy; Canopy Plus uses extra credits. Unused credits roll over one month.",
  };

  /* ======================================================================
     THEME (dark default, light toggle)
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
      if (isEmpty(v)) hide(el); else { el.textContent = v; el.hidden = false; }
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
      if (!m || !m.price || !m.credits) hide(el); else el.textContent = money(Math.round(m.price / m.credits)) + " per credit";
    });
    $$("[data-cfg-if]").forEach(function (el) { if (isEmpty(get(el.dataset.cfgIf))) hide(el); });
    $$("[data-cfg-unless]").forEach(function (el) { if (!isEmpty(get(el.dataset.cfgUnless))) hide(el); });

    $$("[data-email-text]").forEach(function (el) {
      var block = el.closest("[data-cfg-block]") || el;
      if (!CONFIG.email) { block.hidden = true; return; }
      el.textContent = CONFIG.email;
      if (el.tagName === "A") el.href = "mailto:" + CONFIG.email;
      block.hidden = false;
    });
    function showLink(sel, url) {
      $$(sel).forEach(function (el) {
        if (!url) { el.hidden = true; return; }
        el.href = url; el.target = "_blank"; el.rel = "noopener"; el.hidden = false;
      });
    }
    showLink("[data-booking]", CONFIG.bookingUrl);
    showLink("[data-sample-pdf]", CONFIG.samplePackagePdf);
    showLink("[data-portal]", CONFIG.portalUrl);

    $$("[data-whatsapp]").forEach(function (el) {
      var w = CONFIG.whatsapp || {};
      if (!w.display || !w.url) { hide(el); return; }
      el.href = w.url; el.target = "_blank"; el.rel = "noopener";
      var num = el.querySelector(".wa-number");
      if (num) num.textContent = w.display;
    });

    $$("[data-social]").forEach(function (el) {
      var key = el.dataset.social, url = CONFIG[key + "Url"], name = el.dataset.name || key;
      if (!url) return;
      var a = document.createElement("a");
      a.className = "social";
      a.href = url; a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", "Overyard on " + name);
      a.innerHTML = el.innerHTML;
      el.replaceWith(a);
    });

    // Size guide rows
    var guide = $("#size-guide-rows");
    if (guide && CONFIG.sizeGuide && CONFIG.sizeGuide.length) {
      // Price column: the package's current price, or the Canopy Plus rule
      guide.innerHTML = CONFIG.sizeGuide.map(function (r) {
        var pkg = CONFIG.packages[r.tier.toLowerCase()];
        var price = pkg ? money(pkg.price) : (/plus/i.test(r.tier) ? CONFIG.computed.canopyPlusNote : "");
        return '<tr><th scope="row">' + esc(r.tier) + "</th><td>" + esc(r.budget) + "</td><td>" + esc(r.area) + "</td><td>" + esc(price) + "</td></tr>";
      }).join("");
    }

    var seedOpt = $('#f-topic option[value="seed"]');
    if (seedOpt) seedOpt.textContent = "Start a " + money(CONFIG.seed.price) + " Seed Project";

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
    var SIZES = "(min-width: 1280px) 1200px, 100vw";
    function setSources(img, s) {
      img.srcset = sized(s.src, "md") + " 900w, " + s.src + " 2000w"; img.sizes = SIZES;
      img.src = s.src;
    }
    var first = $(".roll-img", stage);
    if (first.getAttribute("src") !== slides[0].src) setSources(first, slides[0]);
    first.alt = slides[0].alt || ""; first.width = slides[0].w; first.height = slides[0].h;
    tag.textContent = slides[0].label || "";

    if (reduceMotion || slides.length < 2) {
      if (strip) strip.hidden = true;
      if (toggle) toggle.hidden = true;
      return;
    }

    var imgs = [first];
    slides.slice(1).forEach(function (s) {
      var img = document.createElement("img");
      img.className = "roll-img";
      img.alt = s.alt || ""; img.loading = "lazy"; img.decoding = "async";
      img.width = s.w || 2000; img.height = s.h || 1125;
      img.dataset.slide = String(imgs.length);
      stage.appendChild(img);
      imgs.push(img);
    });
    strip.innerHTML = slides.map(function (s, i) {
      return '<li><button type="button" class="frame" data-i="' + i + '" aria-label="Show render ' + (i + 1) + ": " + esc(s.label || "") + '">' +
        '<img data-thumb="' + esc(sized(s.src, "sm")) + '" alt="" width="320" height="180" decoding="async">' +
        '<span class="frame-num">' + String(i + 1).padStart(2, "0") + " · " + (s.time === "night" ? "N" : "D") + "</span>" +
        '<span class="frame-progress" aria-hidden="true"></span></button></li>';
    }).join("");
    strip.hidden = false;
    toggle.hidden = false;
    var frames = $$(".frame", strip);

    var index = 0, timer = null, userPaused = false, hoverPaused = false, pageLoaded = false;
    function load(i) { var im = imgs[i]; if (im.dataset.slide) { delete im.dataset.slide; im.loading = "eager"; setSources(im, slides[i]); } }
    afterLoad(function () {
      pageLoaded = true;
      $$("img[data-thumb]", strip).forEach(function (t) { t.src = t.dataset.thumb; t.removeAttribute("data-thumb"); });
      load((index + 1) % slides.length);
    });
    var prev = -1;
    function show(i) {
      var next = (i + slides.length) % slides.length;
      if (next !== index) prev = index;
      index = next;
      load(index);
      if (pageLoaded) load((index + 1) % slides.length);
      imgs.forEach(function (im, j) {
        im.classList.toggle("is-active", j === index);
        im.classList.toggle("is-leaving", j === prev && j !== index);
      });
      frames.forEach(function (f, j) {
        f.classList.toggle("is-active", j === index);
        f.setAttribute("aria-current", j === index ? "true" : "false");
      });
      // Swap the sheet label once the new render is on screen, not before
      var shown = index, im = imgs[index];
      var setTag = function () { if (index === shown) tag.textContent = slides[shown].label || ""; };
      if (im.complete && im.naturalWidth) setTag(); else im.addEventListener("load", setTag, { once: true });
      schedule();
    }
    function running() { return !userPaused && !hoverPaused && !document.hidden; }
    function schedule() {
      clearTimeout(timer);
      roll.classList.toggle("is-paused", !running());
      strip.classList.toggle("is-paused", !running());
      if (!running()) {
        frames.forEach(function (f, j) { if (j !== index) f.classList.remove("is-running"); });
        if (!frames[index].classList.contains("is-running")) frames[index].classList.add("is-running");
        return;
      }
      frames.forEach(function (f) { f.classList.remove("is-running"); });
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
    function onKey(e) {
      if (e.key === "ArrowRight") { e.preventDefault(); show(index + 1); if (strip.contains(document.activeElement)) frames[index].focus(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); show(index - 1); if (strip.contains(document.activeElement)) frames[index].focus(); }
    }
    roll.addEventListener("keydown", onKey);
    strip.addEventListener("keydown", onKey);
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
     ====================================================================== */
  function buildBeforeAfter(leftSrc, rightSrc, alt, eager, labels) {
    labels = labels || ["Before", "After"];
    var wrap = document.createElement("div");
    wrap.className = "ba";
    var srcAttr = eager ? "src" : "data-near-src";
    wrap.innerHTML =
      '<img class="ba-after" ' + srcAttr + '="' + esc(rightSrc) + '" alt="' + esc(labels[1] + ": " + alt) + '" decoding="async">' +
      '<img class="ba-before" ' + srcAttr + '="' + esc(leftSrc) + '" alt="' + esc(labels[0] + ": " + alt) + '" decoding="async">' +
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
     PROJECTS (images/projects/<slug>/project.json, cleared only)
     ====================================================================== */
  var SHEET_ORDER = { photo: 0, plan: 1, model: 2 };
  var projectsPromise = null;
  function loadProjects() {
    if (projectsPromise) return projectsPromise;
    projectsPromise = Promise.all((CONFIG.projects || []).map(function (slug) {
      var base = "images/projects/" + slug + "/";
      return fetch(base + "project.json")
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (p) {
          if (!p || p.cleared !== true || !p.images || !p.images.length) return null;
          p.slug = slug; p.base = base;
          p.images.forEach(function (im) { im.src = base + im.file; });
          // Sheets in drawing-set order: site photo, plan, model, then renders as listed
          p.sheets = p.images.map(function (im, i) { return [im, i]; }).sort(function (a, b) {
            var oa = a[0].time in SHEET_ORDER ? SHEET_ORDER[a[0].time] : 3, ob = b[0].time in SHEET_ORDER ? SHEET_ORDER[b[0].time] : 3;
            return oa - ob || a[1] - b[1];
          }).map(function (x) { return x[0]; });
          var find = function (f) { return p.images.filter(function (im) { return im.file === f; })[0]; };
          p.coverImg = find(p.cover) || p.images.filter(function (im) { return im.time === "day"; })[0] || p.images[0];
          p.coverNightImg = p.coverNight ? find(p.coverNight) : null;
          p.hasNight = p.images.some(function (im) { return im.time === "night"; });
          return p;
        })
        .catch(function () { return null; });
    })).then(function (list) { return list.filter(Boolean); });
    return projectsPromise;
  }

  var CROPS = '<i class="cm cm-tl"></i><i class="cm cm-tr"></i><i class="cm cm-bl"></i><i class="cm cm-br"></i>';
  var cardProjects = [];   // index → project, shared by every grid on the page

  function cardHTML(p, i, large) {
    var day = sized(p.coverImg.src, "md");
    var night = p.coverNightImg ? sized(p.coverNightImg.src, "md") : "";
    var id = cardProjects.push(p) - 1;
    var sheet = "P-" + String(i + 1).padStart(2, "0");
    var toggle = night
      ? '<div class="dn" role="group" aria-label="Day or night render">' +
          '<button type="button" class="dn-btn" data-src="' + esc(day) + '" aria-pressed="true">Day</button>' +
          '<button type="button" class="dn-btn" data-src="' + esc(night) + '" aria-pressed="false">Night</button></div>'
      : "";
    return '<article class="work-card' + (large ? " is-large" : "") + ' wipe" data-category="' + esc((p.category || []).join(" ") + (p.hasNight ? " night" : "")) + '">' +
      '<div class="work-media">' + CROPS +
        '<div class="media"><img data-near-src="' + esc(day) + '" alt="' + esc(p.coverImg.alt || p.coverImg.caption || p.title) + '" width="900" height="563" decoding="async"></div>' +
        toggle +
      "</div>" +
      '<div class="work-body">' +
        '<p class="label">' + sheet + " · " + esc(p.title) + (p.region ? " · " + esc(p.region) : "") + "</p>" +
        "<h3>" + esc(p.title) + "</h3>" +
        "<p>" + esc(p.summary || "") + "</p>" +
        '<button class="work-open" type="button" aria-haspopup="dialog" data-project="' + id + '">View sheets <span class="label">' + p.sheets.length + "</span></button>" +
      "</div></article>";
  }

  // Stretch the last card(s) so the bento has no empty gap in its last row.
  // Desktop: 4 columns, the large card takes 2x2. Tablet: 2 columns, large spans a row.
  function balanceGrid(grid) {
    var cards = $$(".work-card", grid).filter(function (c) { return !c.hidden; });
    cards.forEach(function (c) { c.classList.remove("fill-d2", "fill-d3", "fill-d4", "fill-t"); });
    var n = cards.length;
    if (!n) return;
    var large = cards[0].classList.contains("is-large");
    var last = cards[n - 1], prev = cards[n - 2];
    var r = ((large ? 4 : 1) + n - 1) % 4;
    if (r === 1 && n > 1) last.classList.add("fill-d4");
    if (r === 2 && n > 2) { last.classList.add("fill-d2"); prev.classList.add("fill-d2"); }
    if (r === 3) last.classList.add("fill-d2");
    if (((large ? 2 : 1) + n - 1) % 2 && n > 1) last.classList.add("fill-t");
  }

  function wireGrid(grid) {
    balanceGrid(grid);
    $$(".work-card", grid).forEach(loadWhenNear);
    grid.addEventListener("click", function (e) {
      var btn = e.target.closest(".dn-btn");
      if (!btn) return;
      var card = btn.closest(".work-card"), img = $(".media img", card);
      img.src = btn.dataset.src;
      img.removeAttribute("data-near-src");
      $$(".dn-btn", card).forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
    });
    if (window.__overyardObserveWipes) window.__overyardObserveWipes(grid);
  }

  // Home page: up to CONFIG.homeProjectCount featured projects
  function renderWork(projects) {
    var grid = $("#work-grid");
    if (!grid) return;
    var featured = projects.filter(function (p) { return p.featured; }).slice(0, CONFIG.homeProjectCount || 6);
    if (!featured.length) { hide(grid); return; }
    grid.innerHTML = featured.map(function (p, i) { return cardHTML(p, i, i === 0); }).join("");
    wireGrid(grid);
  }

  // Portfolio page: every cleared project + filter chips
  function renderPortfolio(projects) {
    var grid = $("#portfolio-grid");
    if (!grid) return;
    if (!projects.length) { grid.innerHTML = '<p class="empty">Projects are on their way.</p>'; return; }
    grid.innerHTML = projects.map(function (p, i) { return cardHTML(p, i, i === 0); }).join("");
    wireGrid(grid);
    var count = $("#portfolio-count");
    if (count) count.textContent = plural(projects.length, "project", "projects");

    var chips = $$(".chip-filter");
    chips.forEach(function (chip) {
      var f = chip.dataset.filter;
      var n = f === "all" ? projects.length : $$(".work-card", grid).filter(function (c) { return c.dataset.category.split(" ").indexOf(f) > -1; }).length;
      if (!n) chip.hidden = true;
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
        var shown = 0;
        $$(".work-card", grid).forEach(function (card) {
          var ok = f === "all" || card.dataset.category.split(" ").indexOf(f) > -1;
          card.hidden = !ok;
          card.classList.toggle("is-large", false);
          if (ok) shown++;
        });
        var firstShown = $$(".work-card", grid).filter(function (c) { return !c.hidden; })[0];
        if (firstShown && shown > 2) firstShown.classList.add("is-large");
        balanceGrid(grid);
        if (count) count.textContent = plural(shown, "project", "projects");
      });
    });
  }

  function renderFeatured(projects) {
    var holder = $("#featured-slider");
    if (!holder) return;
    var f = CONFIG.featured || {};
    var p = projects.filter(function (x) { return x.slug === f.project; })[0];
    if (!p || !f.plan || !f.view) { hide(holder); return; }
    $(".featured-media", holder).appendChild(buildBeforeAfter(f.plan, f.view, p.title, false, ["Overhead", "View"]));
    var name = $(".featured-name", holder);
    if (name) name.textContent = p.title;
    loadWhenNear(holder);
  }

  function renderDeliverables() {
    var wrap = $("#deliverables-media");
    var r = CONFIG.receive;
    if (!wrap || !r) return;
    var items = [];
    if (r.plan) items.push({ src: r.plan, w: 928, h: 1152, alt: "2D landscape plan sheet with pool, spa, lawn, stepping pads and planting", label: "Sheet L-101 · 2D plan", plan: true });
    (r.renders || []).forEach(function (src, i) { items.push({ src: src, w: 900, h: 506, alt: i ? "Night render of the courtyard, pool and uplit lemon trees" : "Render of the courtyard with fountain, stepping pads, pool and lemon trees", label: "Sheet R-0" + (i + 1) + " · 3D render" }); });
    if (!items.length) { hide(wrap); return; }
    wrap.innerHTML = items.map(function (it) {
      return '<figure class="sheet' + (it.plan ? " is-plan" : "") + '">' +
        '<div class="media"><img data-near-src="' + esc(it.src) + '" alt="' + esc(it.alt) + '" width="' + it.w + '" height="' + it.h + '" decoding="async"></div>' +
        '<figcaption class="label">' + esc(it.label) + "</figcaption></figure>";
    }).join("");
    loadWhenNear(wrap);
  }

  function renderProcess() {
    $$(".process-card").forEach(function (card, i) {
      var src = (CONFIG.processImages || [])[i];
      var media = $(".process-media", card);
      if (!src || !media) return;
      var img = document.createElement("img");
      img.dataset.nearSrc = src; img.alt = media.dataset.alt || "";
      img.width = 700; img.height = 869; img.decoding = "async";
      media.innerHTML = "";
      media.appendChild(img);
      media.classList.add("has-img");
      loadWhenNear(card);
    });
  }

  /* ======================================================================
     NIGHT BAND (image from config + subtle parallax on desktop)
     ====================================================================== */
  function initBand() {
    var band = $(".band");
    if (!band) return;
    var img = $(".band-img", band);
    if (CONFIG.bandImage && img && img.getAttribute("src") !== CONFIG.bandImage) img.src = CONFIG.bandImage;
    if (reduceMotion || !img) return;
    var desktop = window.matchMedia("(min-width: 900px)");
    var ticking = false;
    function update() {
      ticking = false;
      if (!desktop.matches) { img.style.transform = ""; return; }
      var r = band.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
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

    function preload(i) { var s = slides[i]; if (s) { var im = new Image(); im.src = s.src; } }
    function render() {
      var s = slides[index];
      stage.innerHTML = "";
      var img = document.createElement("img");
      img.src = s.src; img.alt = s.alt || s.caption || ""; img.className = "lb-img";
      stage.appendChild(img);
      var kind = { plan: "Plan", model: "Model", photo: "Site photo" }[s.time];
      captionEl.textContent = (kind && s.caption.indexOf(kind) !== 0 ? kind + " · " : "") + (s.caption || "");
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
      slides = p.sheets;
      if (!slides.length) return;
      index = 0; opener = btn;
      titleEl.textContent = p.title;
      render();
      box.showModal();
      document.documentElement.classList.add("lb-open");
      closeBtn.focus();
      track("open_project", { project: p.title });
    }

    document.addEventListener("click", function (e) {
      if (e.target.closest(".dn")) return;
      var btn = e.target.closest(".work-open");
      var media = e.target.closest(".work-media");
      if (!btn && media) btn = $(".work-open", media.closest(".work-card"));
      if (btn && btn.dataset.project) open(cardProjects[Number(btn.dataset.project)], btn);
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
      if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      if (e.key === "Tab") {
        var f = $$("button, input, [href]", box).filter(function (el) { return !el.disabled && el.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    var startX = null, startY = null;
    stage.addEventListener("pointerdown", function (e) { startX = e.clientX; startY = e.clientY; });
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
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (entry.target.dataset.below === "1") entry.target.classList.add("is-revealed");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px" });
    function observe(root) {
      $$(".reveal, .wipe", root).forEach(function (el) {
        if (el.dataset.below) return;
        el.dataset.below = el.getBoundingClientRect().top > window.innerHeight ? "1" : "0";
        io.observe(el);
      });
    }
    window.__overyardObserveWipes = observe;
    observe(document);
  }

  function initVideo() {
    var wrap = $("[data-walkthrough]");
    if (!wrap) return;
    if (!CONFIG.walkthroughVideo) { wrap.hidden = true; return; }
    wrap.hidden = false;
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
    var bar = $(".mobile-cta"), hero = $(".hero, .page-head"), contact = $("#contact");
    if (!bar || !hero || !("IntersectionObserver" in window)) return;
    var pastHero = false, atContact = false;
    function update() { bar.classList.toggle("is-visible", pastHero && !atContact); }
    new IntersectionObserver(function (e) { pastHero = !e[0].isIntersecting; update(); }).observe(hero);
    if (contact) new IntersectionObserver(function (e) { atContact = e[0].isIntersecting; update(); }, { threshold: 0.05 }).observe(contact);
  }

  /* ======================================================================
     CONTACT FORM (Web3Forms)
     ====================================================================== */
  function initForm() {
    var form = $("#contact-form");
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
    form.noValidate = true;   // JS validates with its own messages; without JS the browser checks required fields
    var keyInput = $("[name=access_key]", form);
    if (keyInput) keyInput.value = CONFIG.web3formsKey || "";

    var status = $(".form-status", form), topicSel = $("#f-topic"), button = $("button[type=submit]", form);
    // ?topic=portfolio (from other pages) pre-selects "What do you need?"
    var qTopic = new URLSearchParams(location.search).get("topic");
    if (qTopic && $('option[value="' + qTopic.replace(/[^a-z-]/g, "") + '"]', topicSel)) topicSel.value = qTopic;
    function setStatus(kind, text) { status.className = "form-status is-" + kind; status.textContent = text; }
    var wa = CONFIG.whatsapp && CONFIG.whatsapp.display ? CONFIG.whatsapp.display : "";

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
          (wa ? " Please message us on WhatsApp at " + wa + "." : CONFIG.email ? " Please email " + CONFIG.email + " instead." : ""));
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
          setStatus("success", "Thanks. Alejandro has your project" + (CONFIG.replyHours ? " and will reply within " + CONFIG.replyHours + " hours." : " and will reply soon."));
          track("generate_lead", { topic: data.topic });
        })
        .catch(function () {
          setStatus("error", "Something went wrong sending the form. Your details are still here, so you can try again" +
            (wa ? ", or message us on WhatsApp at " + wa + "." : CONFIG.email ? ", or email " + CONFIG.email + "." : "."));
        })
        .finally(function () { button.disabled = false; });
    });
  }

  /* ======================================================================
     ANALYTICS + STRUCTURED DATA
     ====================================================================== */
  // The command queues start now (so the page view and early clicks are kept), but the two
  // scripts only download on the visitor's first scroll, tap, click or key press, or after
  // ANALYTICS_DELAY ms, so they never compete with the page while it starts up.
  var ANALYTICS_DELAY = 6000;
  function addScript(src) { var s = document.createElement("script"); s.async = true; s.src = src; document.head.appendChild(s); }
  function addAnalytics() {
    if (!CONFIG.ga4Id && !CONFIG.clarityId) return;
    var started = false, events = ["scroll", "pointerdown", "keydown", "touchstart"];
    function start() {
      if (started) return;
      started = true;
      events.forEach(function (ev) { window.removeEventListener(ev, start, true); });
      if (CONFIG.ga4Id) addScript("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(CONFIG.ga4Id));
      if (CONFIG.clarityId) addScript("https://www.clarity.ms/tag/" + encodeURIComponent(CONFIG.clarityId));
    }
    events.forEach(function (ev) { window.addEventListener(ev, start, { capture: true, passive: true }); });
    setTimeout(start, ANALYTICS_DELAY);

    if (CONFIG.ga4Id) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", CONFIG.ga4Id);
      // The other two lead actions (the form sends generate_lead). Both open a new tab, so the hit has time to send.
      document.addEventListener("click", function (e) {
        var a = e.target.closest("a[href]");
        if (!a) return;
        if (a.matches("[data-booking]")) track("book_call", { link_text: a.textContent.trim() });
        else if (a.matches("[data-whatsapp]")) track("whatsapp_click");
      });
    }
    if (CONFIG.clarityId) {
      window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
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
      "image": SITE_URL + "images/projects/modern-pool-courtyard/pool-on-axis-with-the-pergola-fire-lounge-day.webp",
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
  // Hero and header first. Everything below the fold waits for the page's load
  // event and then runs one step per task, so no single long task delays the hero
  // (the HTML already contains the default values, so nothing visibly changes).
  function afterPaint(fn) { requestAnimationFrame(function () { setTimeout(fn, 0); }); }
  function inSteps(steps) {
    (function next() {
      var fn = steps.shift();
      if (!fn) return;
      fn();
      if (steps.length) setTimeout(next, 0);
    })();
  }
  onReady(function () {
    initTheme();
    initHeader();
    initCameraRoll();
    initForm();   // cheap; attach now so a submit never falls through to the plain HTML post
    if ($("#portfolio-grid")) { loadProjects(); afterPaint(rest); return; }   // the grid is the portfolio page's main content
    if (document.readyState === "complete") afterPaint(rest);
    else window.addEventListener("load", function () { afterPaint(rest); });
  });
  function rest() {
    var hasProjects = $("#work-grid") || $("#portfolio-grid") || $("#featured-slider");
    inSteps([
      fillConfig, renderDeliverables, renderProcess, addSchema, addAnalytics,
      initBand, initReveal, initLightbox, initVideo, initMobileCta,
      function () {
        if (!hasProjects) return;
        loadProjects().then(function (projects) {
          inSteps([
            function () { renderFeatured(projects); },
            function () { renderWork(projects); },
            function () { renderPortfolio(projects); }
          ]);
        });
      }
    ]);
  }
})();
