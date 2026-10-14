/* ==========================================================================
   OVERYARD: SITE SETTINGS  (edit this block)

   Every price, number, link and ID on the site comes from here.
   Change a value, save, commit and push: the whole site updates.
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

  // ---- Analytics (scripts only load when an ID is set) ----
  ga4Id: "",              // e.g. "G-XXXXXXXXXX"
  clarityId: "",          // e.g. "abcd1234ef"

  // ---- Social links (empty = hidden) ----
  linkedinUrl: "",
  instagramUrl: "",
  facebookUrl: "",

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
    sprout: {
      name: "Sprout", desc: "Small yards, front yards and quick sells.",
      founding: 199, regular: 349, credits: 1,
      plan: "2D site and planting plan", renders: 3, walkthrough: "", rounds: 1, takeoff: false,
      days: "3 business days",
    },
    grove: {
      name: "Grove", desc: "Full backyard projects.", featured: "Most popular",
      founding: 399, regular: 649, credits: 2,
      plan: "2D plan + planting schedule", renders: 6, walkthrough: "", rounds: 2, takeoff: false,
      days: "5 business days",
    },
    canopy: {
      name: "Canopy", desc: "Pools, outdoor living and larger builds.",
      founding: 799, regular: 1249, credits: 4,
      plan: "Full plan set", renders: 10, walkthrough: "60–90 sec walkthrough video", rounds: 3, takeoff: true,
      days: "7–10 business days",
    },
  },

  // ---- Evergreen memberships (monthly) ----
  memberships: {
    orchard: {
      name: "Orchard", desc: "A steady few projects a month.",
      founding: 699, regular: 1099, credits: 4,
      perks: ["Takeoffs at $49"],
    },
    forest: {
      name: "Forest", desc: "For crews selling every week.", featured: "Best value",
      founding: 1299, regular: 1999, credits: 8,
      perks: ["2 free takeoffs a month", "Monthly 30-min design review call"],
    },
    oldGrowth: {
      name: "Old Growth", desc: "High-volume design-build teams.",
      founding: 2399, regular: 3699, credits: 16,
      perks: ["Priority turnaround", "Unlimited takeoffs"],
      status: "waitlist",  // "waitlist" = shows "Join the waitlist" instead of a sign-up button
    },
  },

  // ---- Add-ons ----
  addons: {
    takeoff: 75,
    takeoffMembers: 49,
    extraRound: 49,
    rush: "+50%",
    redesign: "Quoted as a new project",
  },

  // ---- Optional files (leave "" until the file is in the folder) ----
  samplePackagePdf: "",   // e.g. "assets/sample-package.pdf"  → shows "See a sample package"
  heroBefore: "",         // e.g. "images/hero-before.webp"    → hero becomes a before/after slider
  samplePlan: "",         // e.g. "images/sample-plan.webp"    → used as the "2D plan" in What you receive
  walkthroughVideo: "",   // e.g. "videos/walkthrough-01.mp4"
  walkthroughPoster: "",

  // ---- Work: projects ----
  // Only projects with cleared: true are shown.
  // !! The founders must confirm image rights for every project before launch. !!
  // images: first = card cover, last = plan view. beforeImage (optional) adds a
  // before/after slider as the first gallery slide.
  projects: [
    {
      name: "Modern pool and front yard",
      line: "Pool and spa, pergola fire lounge, outdoor kitchen, floating stairs and a low-water front yard.",
      cleared: true,
      beforeImage: "",
      images: [
        { src: "images/modern-01.webp", w: 2000, h: 1125, caption: "Pool, spa and outdoor kitchen", alt: "Render of a modern pool and spa with an outdoor kitchen bar in front and a slatted pergola lounge behind" },
        { src: "images/modern-02.webp", w: 2000, h: 1125, caption: "Pool and pergola lounge, night", alt: "Night render of the pool, spa and pergola fire lounge with landscape lighting" },
        { src: "images/modern-03.webp", w: 2000, h: 1125, caption: "Pergola fire lounge", alt: "Render of a slatted pergola with a fire table and lounge seating" },
        { src: "images/modern-04.webp", w: 2000, h: 1125, caption: "Floating stairs and water wall, night", alt: "Night render of floating concrete stairs on a grass slope beside a lit water wall" },
        { src: "images/modern-05.webp", w: 2000, h: 1125, caption: "Front yard planting", alt: "Render of a modern front yard with salvia, boulders, river rock and path lights" },
        { src: "images/modern-06.webp", w: 2000, h: 1125, caption: "Front yard lighting, night", alt: "Night render of the front yard with path lights and uplit shrubs" },
        { src: "images/modern-07.webp", w: 2000, h: 1125, caption: "Plan view", alt: "Top-down render of the property showing the pool, pergola, kitchen, side yards and front yard", plan: true },
      ],
    },
    {
      name: "Pool courtyard and citrus grove",
      line: "Pool and spa, pergola dining with an outdoor kitchen, and a fire pit under lemon trees.",
      cleared: true,
      beforeImage: "",
      images: [
        { src: "images/courtyard-01.webp", w: 1920, h: 1080, caption: "Courtyard overview", alt: "Render of a backyard with a fountain, stepping pads in lawn, a pool and spa, and a fire pit lounge under lemon trees" },
        { src: "images/courtyard-02.webp", w: 2000, h: 1125, caption: "Courtyard overview, night", alt: "Night render of the fountain, stepping pads, lit pool and uplit lemon trees" },
        { src: "images/courtyard-03.webp", w: 2000, h: 1125, caption: "Fire pit under the lemon trees", alt: "Render of a fire pit lounge on a stamped concrete pad framed by lemon trees" },
        { src: "images/courtyard-04.webp", w: 2000, h: 1125, caption: "Fire pit, night", alt: "Night render of the fire pit lounge with uplit lemon trees and in-ground lights" },
        { src: "images/courtyard-05.webp", w: 1920, h: 1080, caption: "Pergola dining and outdoor kitchen", alt: "Render of a pergola dining area with an outdoor kitchen, with the tiled spa and pool in front" },
        { src: "images/courtyard-06.webp", w: 2000, h: 1125, caption: "View from the fire pit", alt: "Render looking from the fire pit across the lawn and stepping pads to the pool and house" },
        { src: "images/courtyard-07.webp", w: 2000, h: 1125, caption: "Plan view", alt: "Top-down render of the pool, spa, pergola, lawn and stepping pads", plan: true },
      ],
    },
    {
      name: "Terraced hillside",
      line: "Three tiers of retaining walls, lit stairs, a sunken fire lounge and slope planting.",
      cleared: true,
      beforeImage: "",
      images: [
        { src: "images/terraced-01.webp", w: 2000, h: 1125, caption: "Hillside overview", alt: "Render of a terraced hillside backyard with tiered retaining walls, wide stairs, a sunken fire lounge and a lawn terrace" },
        { src: "images/terraced-02.webp", w: 2000, h: 1125, caption: "Sunken fire lounge", alt: "Render of a sunken fire lounge with stairs and planted terraces behind" },
        { src: "images/terraced-03.webp", w: 2000, h: 1125, caption: "Main stairs and terraces", alt: "Render of the main stairs climbing between planted terraces" },
        { src: "images/terraced-04.webp", w: 1440, h: 959, caption: "Stair and wall lighting, night", alt: "Night render looking up the lit stairs past wall-washed retaining walls to the house" },
        { src: "images/terraced-05.webp", w: 2000, h: 1125, caption: "Plan view", alt: "Top-down render of the retaining walls, stairs, lawn terrace and fire lounge", plan: true },
      ],
    },
    {
      name: "Lakeside hillside",
      line: "Under-deck patio, curved retaining walls, a lakeside terrace and full landscape lighting.",
      cleared: true,
      beforeImage: "",
      images: [
        { src: "images/lakeside-01.webp", w: 2000, h: 1331, caption: "Under-deck patio and walkway, dusk", alt: "Dusk render of an under-deck patio with a curved seat wall, paver walkway, path lights and foundation planting" },
        { src: "images/lakeside-02.webp", w: 2000, h: 1331, caption: "Lakeside terrace and boathouse", alt: "Render of a lakeside paver terrace with retaining walls, planting beds and a boathouse, with the house on the hill behind" },
        { src: "images/lakeside-03.webp", w: 2000, h: 1331, caption: "Curved seat wall and driveway planting, night", alt: "Night render of a curved seat wall around a paver patio, with lit planting along the driveway" },
        { src: "images/lakeside-04.webp", w: 2000, h: 1331, caption: "Recessed stairs with step lighting", alt: "Dusk render of a large paver terrace with recessed stairs, step lighting and a retaining wall with planting above" },
        { src: "images/lakeside-05.webp", w: 1500, h: 999, caption: "Aerial view", alt: "Aerial render of a curved paver patio, planting bed and lawn with landscape lighting" },
      ],
    },
    {
      name: "Wooded lakefront",
      line: "Flagstone fire pit and patios, a raised hot tub and naturalistic planting down to the dock.",
      cleared: true,
      beforeImage: "",
      images: [
        { src: "images/lakefront-02.webp", w: 1125, h: 750, caption: "Fire pit with redbuds and perennials", alt: "Render of a flagstone fire pit with redbuds and perennial beds, with the lake and dock behind" },
        { src: "images/lakefront-01.webp", w: 1439, h: 959, caption: "Woodland path to the fire pit", alt: "Render of a stepping-stone path through the woods to a fire pit by the lake" },
        { src: "images/lakefront-03.webp", w: 1439, h: 959, caption: "Hot tub patio", alt: "Render of a flagstone patio with a raised hot tub and layered planting" },
        { src: "images/lakefront-04.webp", w: 1439, h: 959, caption: "Flagstone lounge and path", alt: "Render of a flagstone lounge looking back toward the house along a stepping-stone path" },
        { src: "images/lakefront-05.webp", w: 1439, h: 959, caption: "Plan view", alt: "Top-down aerial render of the property with the dock, fire pit area, driveway and shoreline", plan: true },
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

  // ---------- helpers ----------
  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, CONFIG);
  }
  function isEmpty(v) { return v === undefined || v === null || v === "" || v === 0 || v === false || v === "#"; }
  function money(n) { return "$" + Number(n).toLocaleString("en-US"); }
  function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function hide(el) { (el.closest("[data-cfg-block]") || el).hidden = true; }
  function onReady(fn) { if (document.readyState !== "loading") fn(); else document.addEventListener("DOMContentLoaded", fn); }
  function whenNear(el, fn) {
    if (!("IntersectionObserver" in window)) { fn(); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); fn(); }
    }, { rootMargin: "600px 0px" });
    io.observe(el);
  }

  // ---------- Plan-symbol glyphs (thin strokes, take the color of their parent) ----------
  var GLYPHS = {
    seed: '<ellipse cx="16" cy="16" rx="6.5" ry="10" transform="rotate(35 16 16)"/><path d="M12 20 Q16 16 20 12"/>',
    sprout: '<path d="M16 28 V12"/><path d="M16 19 C10 19 7.5 14.5 7.5 11 C12.5 11 16 14 16 19 Z"/><path d="M16 15 C22 15 24.5 10.5 24.5 7 C19.5 7 16 10 16 15 Z"/>',
    grove: '<circle cx="11" cy="19.5" r="7"/><circle cx="21" cy="19.5" r="7"/><circle cx="16" cy="11" r="7"/>',
    canopy: '<circle cx="16" cy="16" r="12"/><circle cx="16" cy="16" r="7" stroke-dasharray="2.6 2.4"/><circle cx="16" cy="16" r="1.8" fill="currentColor" stroke="none"/>',
    orchard: '<circle cx="10" cy="10" r="5.2"/><circle cx="22" cy="10" r="5.2"/><circle cx="10" cy="22" r="5.2"/><circle cx="22" cy="22" r="5.2"/>',
    forest: '<circle cx="11.5" cy="12" r="7"/><circle cx="21.5" cy="11" r="6"/><circle cx="10" cy="21.5" r="6"/><circle cx="20.5" cy="21" r="7.5"/>',
    oldGrowth: '<circle cx="16" cy="16" r="13"/><circle cx="16.5" cy="15.5" r="9.5"/><circle cx="17" cy="15.5" r="6"/><circle cx="17" cy="15" r="2.6"/>',
  };
  function glyph(name, cls) {
    return '<svg class="glyph ' + (cls || "") + '" viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + GLYPHS[name] + "</svg>";
  }

  // ---------- Values worked out from the config ----------
  var pkgList = Object.keys(CONFIG.packages).map(function (k) { return CONFIG.packages[k]; });
  var days = pkgList.reduce(function (a, p) { return a.concat((String(p.days).match(/\d+/g) || []).map(Number)); }, []);
  var rounds = pkgList.map(function (p) { return p.rounds; }).filter(Boolean);
  var seedScope = CONFIG.packages[String(CONFIG.seed.scope || "").toLowerCase()] || null;
  CONFIG.computed = {
    turnaroundRange: days.length ? Math.min.apply(null, days) + " to " + Math.max.apply(null, days) + " business days" : "",
    revisionRange: rounds.length ? Math.min.apply(null, rounds) + " to " + Math.max.apply(null, rounds) + " revision rounds" : "",
    fromPrice: Math.min.apply(null, pkgList.map(function (p) { return p.founding; }).concat([CONFIG.seed.price || Infinity])),
    seedPrice: CONFIG.seed.price ? money(CONFIG.seed.price) : "",
    creditMix: pkgList.map(function (p) { return p.name + " " + p.credits; }).join(", "),
  };

  /* ======================================================================
     THEME (dark default, light toggle). The <head> script applies the saved
     theme before paint; this wires up the button and theme-color.
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
    if (save) { try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* storage blocked: ignore */ } }
  }
  function initTheme() {
    applyTheme(currentTheme(), false);
    $$(".theme-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () { applyTheme(currentTheme() === "light" ? "dark" : "light", true); });
    });
  }

  /* ======================================================================
     FILL CONFIG VALUES INTO THE PAGE
     data-cfg="path"          → text
     data-cfg-money="path"    → $1,249
     data-cfg-if / -unless    → show only if value set / empty
     Empty values hide the element (or its nearest [data-cfg-block]).
     ====================================================================== */
  function fillConfig() {
    $$("[data-cfg]").forEach(function (el) {
      var v = get(el.dataset.cfg);
      if (isEmpty(v)) hide(el); else el.textContent = v;
    });
    $$("[data-cfg-money]").forEach(function (el) {
      var v = get(el.dataset.cfgMoney);
      if (isEmpty(v) || v === Infinity) hide(el); else el.textContent = money(v);
    });
    $$("[data-cfg-if]").forEach(function (el) { if (isEmpty(get(el.dataset.cfgIf))) hide(el); });
    $$("[data-cfg-unless]").forEach(function (el) { if (!isEmpty(get(el.dataset.cfgUnless))) hide(el); });

    // Plain-text email
    $$("[data-email-text]").forEach(function (el) {
      if (!CONFIG.email) hide(el); else el.textContent = CONFIG.email;
    });
    // Social links
    $$("[data-social]").forEach(function (el) {
      var url = CONFIG[el.dataset.social + "Url"];
      if (isEmpty(url)) hide(el); else { el.href = url; el.target = "_blank"; el.rel = "noopener"; }
    });
    // Booking links (new tab)
    $$("[data-booking]").forEach(function (el) {
      if (!CONFIG.bookingUrl) { hide(el); return; }
      el.href = CONFIG.bookingUrl; el.target = "_blank"; el.rel = "noopener";
    });
    // Sample package PDF
    $$("[data-sample-pdf]").forEach(function (el) {
      if (!CONFIG.samplePackagePdf) { hide(el); return; }
      el.href = CONFIG.samplePackagePdf;
    });
    var year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ======================================================================
     PRICING: Seed card, packages, memberships, add-ons
     ====================================================================== */
  function priceBlock(now, was) {
    return '<p class="price"><span class="price-now">' + money(now) + "</span>" +
      (was ? '<span class="price-was"><span class="visually-hidden">Regular price </span><s>' + money(was) + "</s></span>" : "") + "</p>";
  }
  function packageItems(p) {
    var li = [];
    if (p.plan) li.push(esc(p.plan));
    if (p.renders) li.push(esc(plural(p.renders, "photoreal 3D render", "photoreal 3D renders")));
    if (p.walkthrough) li.push(esc(p.walkthrough));
    if (p.rounds) li.push(esc(plural(p.rounds, "revision round", "revision rounds")));
    if (p.takeoff) li.push("Material takeoff included");
    else if (CONFIG.addons.takeoff) li.push("Material takeoff add-on: " + money(CONFIG.addons.takeoff));
    if (p.days) li.push(esc(p.days));
    return li.map(function (t) { return "<li>" + t + "</li>"; }).join("");
  }

  function renderSeed() {
    var el = $("#seed-card");
    if (!el) return;
    var s = CONFIG.seed;
    if (!s || !s.price) { hide(el); return; }
    el.innerHTML =
      '<div class="seed-head">' + glyph("seed", "is-stone") +
        '<div><p class="label">First project</p><h3>Seed Project</h3></div></div>' +
      '<p class="seed-desc">Your first design at ' + esc(s.scope || "") + " scope. One per company, paid upfront.</p>" +
      priceBlock(s.price, s.was) +
      (seedScope ? '<ul class="ticks">' + packageItems(seedScope) + "</ul>" : "") +
      (s.guarantee ? '<p class="note-clay"><strong>Guarantee.</strong> ' + esc(s.guarantee) + "</p>" : "") +
      '<a href="#contact" class="btn btn-primary" data-topic="seed">Start a ' + money(s.price) + " Seed Project</a>";
  }

  function renderConversion() {
    var el = $("#seed-conversion");
    if (!el) return;
    var c = CONFIG, parts = [];
    if (c.seedJoinWindowDays && c.rateLockMonths) parts.push("Join as a Founding Root within " + c.seedJoinWindowDays + " days of delivery to lock founding rates for " + c.rateLockMonths + " months.");
    if (c.seedCreditDays && c.seed.price) parts.push("Join a membership within " + c.seedCreditDays + " days and we credit your " + money(c.seed.price) + " to the first month.");
    if (c.foundingSpots) parts.push("Only " + c.foundingSpots + " founding spots.");
    if (!parts.length) { hide(el); return; }
    el.textContent = parts.join(" ");
  }

  function renderPackages() {
    var wrap = $("#packages");
    if (!wrap) return;
    var glyphs = { sprout: "sprout", grove: "grove", canopy: "canopy" };
    wrap.innerHTML = Object.keys(CONFIG.packages).map(function (key) {
      var p = CONFIG.packages[key];
      return '<article class="card package' + (p.featured ? " is-featured" : "") + '">' +
        (p.featured ? '<p class="badge">' + esc(p.featured) + "</p>" : "") +
        '<div class="card-head">' + glyph(glyphs[key] || "sprout", "is-fern") +
          "<div><h3>" + esc(p.name) + '</h3><p class="card-desc">' + esc(p.desc || "") + "</p></div></div>" +
        priceBlock(p.founding, p.regular) +
        (p.credits ? '<p class="label credits">' + plural(p.credits, "credit", "credits") + " on Evergreen</p>" : "") +
        '<ul class="ticks">' + packageItems(p) + "</ul>" +
        '<a href="#contact" class="btn ' + (p.featured ? "btn-primary" : "btn-outline") + '" data-topic="quote" data-package="' + esc(p.name) + '">Start with ' + esc(p.name) + "</a>" +
        "</article>";
    }).join("");
  }

  function renderMemberships() {
    var wrap = $("#memberships");
    if (!wrap) return;
    var look = { orchard: ["orchard", "is-gold", "tone-gold"], forest: ["forest", "is-fern", "tone-fern"], oldGrowth: ["oldGrowth", "is-clay", "tone-clay"] };
    wrap.innerHTML = Object.keys(CONFIG.memberships).map(function (key) {
      var m = CONFIG.memberships[key];
      var l = look[key] || ["forest", "is-fern", "tone-fern"];
      var waitlist = m.status === "waitlist";
      var perCredit = m.founding && m.credits ? money(Math.round(m.founding / m.credits)) : "";
      return '<article class="card membership ' + l[2] + (m.featured ? " is-featured" : "") + (waitlist ? " is-waitlist" : "") + '">' +
        (m.featured ? '<p class="badge">' + esc(m.featured) + "</p>" : "") +
        (waitlist ? '<p class="badge badge-clay">Waitlist</p>' : "") +
        '<div class="card-head">' + glyph(l[0], l[1]) +
          "<div><h3>" + esc(m.name) + '</h3><p class="card-desc">' + esc(m.desc || "") + "</p></div></div>" +
        '<p class="price"><span class="price-now">' + money(m.founding) + '</span><span class="per">/mo</span>' +
          (m.regular ? '<span class="price-was"><span class="visually-hidden">Regular price </span><s>' + money(m.regular) + "</s></span>" : "") + "</p>" +
        '<p class="label credits">' + plural(m.credits, "credit", "credits") + " a month" + (perCredit ? " · " + perCredit + " per credit" : "") + "</p>" +
        '<ul class="ticks">' + (m.perks || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
        (waitlist
          ? '<a href="#contact" class="btn btn-clay" data-topic="waitlist" data-package="' + esc(m.name) + '">Join the waitlist</a>'
          : '<a href="#contact" class="btn ' + (m.featured ? "btn-primary" : "btn-outline") + '" data-topic="membership" data-package="' + esc(m.name) + '">Join ' + esc(m.name) + "</a>") +
        "</article>";
    }).join("");
  }

  function renderAddons() {
    var ul = $("#addons");
    if (!ul) return;
    var a = CONFIG.addons, li = [];
    if (a.takeoff) li.push(["Material takeoff", money(a.takeoff) + (a.takeoffMembers ? " (" + money(a.takeoffMembers) + " for members)" : "")]);
    if (a.extraRound) li.push(["Extra revision round", money(a.extraRound)]);
    if (a.rush) li.push(["Rush delivery", a.rush]);
    if (a.redesign) li.push(["New layout (redesign)", a.redesign]);
    if (!li.length) { hide(ul); return; }
    ul.innerHTML = li.map(function (r) { return '<li><span>' + esc(r[0]) + '</span><span class="addon-price">' + esc(r[1]) + "</span></li>"; }).join("");
  }

  /* ======================================================================
     WORK: project cards from CONFIG.projects (cleared only)
     ====================================================================== */
  var shownProjects = CONFIG.projects.filter(function (p) { return p.cleared && p.images && p.images.length; });

  function renderWork() {
    var grid = $("#work-grid");
    if (!grid) return;
    if (!shownProjects.length) { hide(grid); return; }
    grid.innerHTML = shownProjects.map(function (p, i) {
      var c = p.images[0];
      return '<article class="work-card">' +
        '<div class="media"><img src="' + esc(c.src) + '" alt="' + esc(c.alt) + '" width="' + c.w + '" height="' + c.h + '" loading="lazy" decoding="async"></div>' +
        '<div class="work-body">' +
          '<p class="label">P-' + String(i + 1).padStart(2, "0") + "</p>" +
          '<h3><button class="work-open" type="button" aria-haspopup="dialog" data-index="' + i + '">' + esc(p.name) + "</button></h3>" +
          "<p>" + esc(p.line) + "</p>" +
          '<span class="work-count" aria-hidden="true">' + plural(p.images.length + (p.beforeImage ? 1 : 0), "image", "images") + "</span>" +
        "</div></article>";
    }).join("");
  }

  // What you receive: plan + 2 renders from the first cleared project
  function renderDeliverables() {
    var wrap = $("#deliverables-media");
    if (!wrap) return;
    var p = shownProjects[0];
    if (!p) { hide(wrap); return; }
    var plan = p.images.filter(function (im) { return im.plan; })[0];
    var renders = p.images.filter(function (im) { return !im.plan; }).slice(0, 2);
    var planSrc = CONFIG.samplePlan || (plan && plan.src);
    var items = [];
    if (planSrc) items.push({ src: planSrc, w: plan ? plan.w : 2000, h: plan ? plan.h : 1125, alt: "2D plan view of " + p.name.toLowerCase(), label: "2D plan", plan: true });
    renders.forEach(function (r, i) { items.push({ src: r.src, w: r.w, h: r.h, alt: r.alt, label: "3D render " + (i + 1) }); });
    wrap.innerHTML = items.map(function (it) {
      return '<figure class="sheet' + (it.plan ? " is-plan" : "") + '">' +
        '<div class="media"><img src="' + esc(it.src) + '" alt="' + esc(it.alt) + '" width="' + it.w + '" height="' + it.h + '" loading="lazy" decoding="async"></div>' +
        '<figcaption class="label">' + esc(it.label) + "</figcaption></figure>";
    }).join("");
  }

  /* ======================================================================
     BEFORE/AFTER SLIDER (native range input = keyboard, touch, screen reader)
     ====================================================================== */
  function buildBeforeAfter(beforeSrc, afterSrc, alt, eager) {
    var wrap = document.createElement("div");
    wrap.className = "ba";
    var loading = eager ? "eager" : "lazy";
    wrap.innerHTML =
      '<img class="ba-after" src="' + esc(afterSrc) + '" alt="After: ' + esc(alt) + '" loading="' + loading + '">' +
      '<img class="ba-before" src="' + esc(beforeSrc) + '" alt="Before: site photo" loading="' + loading + '">' +
      '<span class="ba-label ba-label-before" aria-hidden="true">Before</span>' +
      '<span class="ba-label ba-label-after" aria-hidden="true">After</span>' +
      '<span class="ba-handle" aria-hidden="true"></span>' +
      '<input class="ba-range" type="range" min="0" max="100" value="50" aria-label="Before and after comparison. Use arrow keys to move the divider.">';
    var range = wrap.querySelector(".ba-range");
    range.addEventListener("input", function () {
      wrap.style.setProperty("--pos", range.value + "%");
      range.setAttribute("aria-valuetext", range.value + "% before photo shown");
    });
    return wrap;
  }

  function initHeroBeforeAfter() {
    var fig = $(".hero-media");
    if (!CONFIG.heroBefore || !fig) return;
    var img = fig.querySelector(".hero-img-dark") || fig.querySelector("img");
    fig.innerHTML = "";
    fig.appendChild(buildBeforeAfter(CONFIG.heroBefore, img.getAttribute("src"), img.alt, true));
    fig.classList.add("has-ba");
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
      if (p.beforeImage) list.push({ type: "ba", before: p.beforeImage, after: p.images[0].src, alt: p.images[0].alt, caption: "Before and after: drag to compare" });
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
      var btn = e.target.closest(".work-open");
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
     HEADER, REVEAL, VIDEO, MOBILE CTA
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
  // rise-in animation the first time they scroll into view.
  function initReveal() {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var first = true;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (!first) entry.target.classList.add("is-revealed");
        io.unobserve(entry.target);
      });
      first = false;
    }, { rootMargin: "0px 0px -6% 0px" });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  }

  function initVideo() {
    var wrap = $("[data-walkthrough]");
    if (!wrap) return;
    if (!CONFIG.walkthroughVideo) { wrap.hidden = true; return; }
    var video = wrap.querySelector("video");
    if (CONFIG.walkthroughPoster) video.poster = CONFIG.walkthroughPoster;
    whenNear(wrap, function () {
      video.src = CONFIG.walkthroughVideo;
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) video.play().catch(function () {});
    });
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
    // Buttons with data-topic pre-select "What do you need?" (and note the package)
    document.addEventListener("click", function (e) {
      var link = e.target.closest("[data-topic]");
      if (!link || !form) return;
      var topic = $("#f-topic");
      topic.value = link.dataset.topic;
      var pkg = link.dataset.package, msg = $("#f-message");
      if (pkg && msg && (!msg.value || /^I'd like to start with /.test(msg.value) || /^I'm interested in /.test(msg.value))) {
        msg.value = link.dataset.topic === "quote" ? "I'd like to start with " + pkg + "." : "I'm interested in " + pkg + ".";
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
        setStatus("error", "The form isn't connected yet." + (CONFIG.email ? " Please email " + CONFIG.email + " instead." : ""));
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
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  // ---------- start ----------
  onReady(function () {
    initTheme();
    renderSeed();
    renderConversion();
    renderPackages();
    renderMemberships();
    renderAddons();
    renderWork();
    renderDeliverables();
    fillConfig();
    addSchema();
    addAnalytics();
    initHeader();
    initReveal();
    initHeroBeforeAfter();
    initLightbox();
    initVideo();
    initMobileCta();
    initForm();
  });
})();
