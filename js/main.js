/* ==========================================================================
   OVERYARD: SITE SETTINGS  (edit this block)

   Every price, number, link and ID on the page comes from here.
   Change a value, save, and the whole site updates.
   Leave a value empty ("") or 0 to HIDE whatever uses it on the page,
   so placeholder text never shows on the live site.
   ========================================================================== */
const CONFIG = {

  // ---- Contact ----
  email: "",              // e.g. "hello@overyard.com"  (empty = email links hidden)
  bookingUrl: "",         // Calendly link, e.g. "https://calendly.com/overyard/intro-call"
  web3formsKey: "",       // Access key from web3forms.com (free). The form won't send until this is set.

  // ---- Analytics (optional; scripts only load when an ID is set) ----
  ga4Id: "",              // Google Analytics 4, e.g. "G-XXXXXXXXXX"
  clarityId: "",          // Microsoft Clarity project ID, e.g. "abcd1234ef"

  // ---- Social links ("" or "#" = hidden) ----
  social: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },

  // ---- Founding Contractor offer ----
  foundingSpots: 5,       // shown as "Only 5 founding spots are open" (0 = line hidden)
  rateLockMonths: 6,      // shown as "rate locked for 6 months"
  currencyNote: "All prices in USD.",
  guarantee: "First draft misses the brief? We redo it free. Still not right? You don't pay.",

  // ---- Free sample render ----
  sample: {
    turnaround: "3 business days",
    terms: "One per company. No obligation.",
  },

  // ---- Packages ----
  // founding = price shown large, regular = struck-through price
  // video = "" for none; takeoff = true if included in the package
  packages: {
    starter: {
      founding: 199, regular: 349,
      renders: 3, video: "", revisions: 1, takeoff: false,
      turnaround: "3 business days",
    },
    standard: {
      founding: 399, regular: 649,
      renders: 6, video: "", revisions: 2, takeoff: false,
      turnaround: "5 business days",
    },
    premium: {
      founding: 799, regular: 1249,
      renders: 10, video: "60 to 90 second walkthrough video", revisions: 3, takeoff: true,
      turnaround: "7 to 10 business days",
    },
  },

  // ---- Add-ons ----
  takeoffAddon: 75,       // material takeoff for Starter / Standard
  extraRevision: 49,      // one extra revision round
  rush: "+50%",           // rush delivery surcharge

  // ---- Optional media (leave "" until the file is in the folder) ----
  walkthroughVideo: "",   // e.g. "videos/walkthrough-01.mp4"
  walkthroughPoster: "",  // e.g. "images/walkthrough-01-poster.webp"
  founderPhotos: {
    edmond: "",           // e.g. "images/founder-edmond.jpg"  (empty = initials shown)
    kim: "",              // e.g. "images/founder-kim.jpg"
  },
  // Before photos for the before/after slider. Add the path once the file exists.
  // hero = slider in the hero; project-01..05 = first slide of that project's gallery.
  beforePhotos: {
    "hero": "",           // e.g. "images/hero-01-before.webp"
    "project-01": "",     // Modern pool and front yard
    "project-02": "",     // Pool courtyard and citrus grove
    "project-03": "",     // Terraced hillside
    "project-04": "",     // Lakeside hillside
    "project-05": "",     // Wooded lakefront
  },
};

/* ==========================================================================
   You shouldn't need to edit below this line.
   ========================================================================== */

(function () {
  "use strict";

  var SITE_URL = "https://kimdeegeo.github.io/overyard-website/";

  // ---------- helpers ----------
  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, CONFIG);
  }
  function isEmpty(v) { return v === undefined || v === null || v === "" || v === 0 || v === false || v === "#"; }
  function money(n) { return "$" + Number(n).toLocaleString("en-US"); }
  function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }
  function hide(el) {
    var target = el.closest("[data-cfg-block]") || el;
    target.hidden = true;
  }
  function onReady(fn) { if (document.readyState !== "loading") fn(); else document.addEventListener("DOMContentLoaded", fn); }

  // Values worked out from the packages (used in How it works, FAQ, comparison)
  function numbersIn(s) { return String(s || "").match(/\d+/g) || []; }
  var pkgs = Object.keys(CONFIG.packages).map(function (k) { return CONFIG.packages[k]; });
  var days = pkgs.reduce(function (a, p) { return a.concat(numbersIn(p.turnaround).map(Number)); }, []);
  var rounds = pkgs.map(function (p) { return p.revisions; }).filter(Boolean);
  var prices = pkgs.map(function (p) { return p.founding; }).filter(Boolean);
  CONFIG.computed = {
    turnaroundRange: days.length ? Math.min.apply(null, days) + " to " + Math.max.apply(null, days) + " business days" : "",
    revisionRange: rounds.length ? (Math.min.apply(null, rounds) === Math.max.apply(null, rounds)
      ? plural(rounds[0], "revision round", "revision rounds")
      : Math.min.apply(null, rounds) + " to " + Math.max.apply(null, rounds) + " revision rounds") : "",
    fromPrice: prices.length ? Math.min.apply(null, prices) : 0,
  };

  // ---------- 1. Fill config values into the page ----------
  // data-cfg="path"          → plain text
  // data-cfg-money="path"    → $1,249
  // data-cfg-rounds="path"   → "2 revision rounds"
  // data-cfg-renders="path"  → "6 photoreal 3D renders"
  // data-cfg-if="path"       → element shown only if value is set / true
  // data-cfg-unless="path"   → element shown only if value is empty / false
  // Empty values hide the element (or its nearest [data-cfg-block] wrapper).
  function fillConfig() {
    document.querySelectorAll("[data-cfg]").forEach(function (el) {
      var v = get(el.dataset.cfg);
      if (isEmpty(v)) hide(el); else el.textContent = v;
    });
    document.querySelectorAll("[data-cfg-money]").forEach(function (el) {
      var v = get(el.dataset.cfgMoney);
      if (isEmpty(v)) hide(el); else el.textContent = money(v);
    });
    document.querySelectorAll("[data-cfg-rounds]").forEach(function (el) {
      var v = get(el.dataset.cfgRounds);
      if (isEmpty(v)) hide(el); else el.textContent = plural(v, "revision round", "revision rounds");
    });
    document.querySelectorAll("[data-cfg-renders]").forEach(function (el) {
      var v = get(el.dataset.cfgRenders);
      if (isEmpty(v)) hide(el); else el.textContent = plural(v, "photoreal 3D render", "photoreal 3D renders");
    });
    document.querySelectorAll("[data-cfg-if]").forEach(function (el) {
      if (isEmpty(get(el.dataset.cfgIf))) hide(el);
    });
    document.querySelectorAll("[data-cfg-unless]").forEach(function (el) {
      if (!isEmpty(get(el.dataset.cfgUnless))) hide(el);
    });

    // Email links
    document.querySelectorAll("[data-email]").forEach(function (el) {
      if (!CONFIG.email) { hide(el); return; }
      el.href = "mailto:" + CONFIG.email;
      if (!el.dataset.keepText) el.textContent = CONFIG.email;
    });

    // Social links
    document.querySelectorAll("[data-social]").forEach(function (el) {
      var url = CONFIG.social[el.dataset.social];
      if (isEmpty(url)) hide(el); else { el.href = url; el.target = "_blank"; el.rel = "noopener"; }
    });

    // "Book a call" links go to the calendar (or the contact section if none is set)
    document.querySelectorAll("[data-booking-link]").forEach(function (el) {
      el.href = CONFIG.bookingUrl ? "#book" : "#contact";
    });

    // Footer year
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  // ---------- 2. Structured data for search engines (no reviews/ratings) ----------
  function addSchema() {
    var data = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Overyard",
      "url": SITE_URL,
      "logo": SITE_URL + "assets/logo.svg",
      "image": SITE_URL + "images/hero-01.webp",
      "description": "White-label and co-branded landscape design for landscape, hardscape, pool and outdoor-living contractors: 2D plans, 3D renders and material takeoffs.",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Australia" }
      ]
    };
    if (CONFIG.email) data.email = CONFIG.email;
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  // ---------- 3. Analytics (only if IDs are set) ----------
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

  // ---------- 4. Header: mobile menu + border on scroll ----------
  function initHeader() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    function closeMenu() { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

    var header = document.querySelector(".site-header");
    function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------- 5. Fade-in on scroll ----------
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach(function (el) { el.classList.add("is-visible"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  // ---------- 6. Before/after slider ----------
  // Builds: <div class="ba"> after image, before image (clipped), range input, handle.
  // The native range input gives keyboard, touch and screen-reader support.
  function buildBeforeAfter(beforeSrc, afterSrc, alt, eager) {
    var wrap = document.createElement("div");
    wrap.className = "ba";
    wrap.style.setProperty("--pos", "50%");
    var loading = eager ? "eager" : "lazy";
    wrap.innerHTML =
      '<img class="ba-after" src="' + afterSrc + '" alt="After: ' + alt + '" loading="' + loading + '">' +
      '<img class="ba-before" src="' + beforeSrc + '" alt="Before: site photo" loading="' + loading + '">' +
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
    var before = CONFIG.beforePhotos && CONFIG.beforePhotos.hero;
    var fig = document.querySelector(".hero-media");
    if (!before || !fig) return;
    var img = fig.querySelector("img");
    var slider = buildBeforeAfter(before, img.getAttribute("src"), img.alt, true);
    fig.innerHTML = "";
    fig.appendChild(slider);
    fig.classList.add("has-ba");
  }

  // ---------- 7. Work gallery lightbox ----------
  // Each .work-card holds a <template class="work-images"> listing its images.
  function initLightbox() {
    var box = document.getElementById("lightbox");
    if (!box || typeof box.showModal !== "function") return;

    var stage = box.querySelector(".lb-stage");
    var titleEl = box.querySelector(".lb-title");
    var captionEl = box.querySelector(".lb-caption");
    var counterEl = box.querySelector(".lb-counter");
    var prevBtn = box.querySelector(".lb-prev");
    var nextBtn = box.querySelector(".lb-next");
    var closeBtn = box.querySelector(".lb-close");
    var slides = [], index = 0, opener = null;

    function slidesFor(card) {
      var list = [];
      var key = card.dataset.project;
      var tpl = card.querySelector("template.work-images");
      var imgs = tpl ? Array.prototype.slice.call(tpl.content.querySelectorAll("img")) : [];
      var before = CONFIG.beforePhotos && CONFIG.beforePhotos[key];
      if (before && imgs[0]) {
        list.push({ type: "ba", before: before, after: imgs[0].dataset.src, alt: imgs[0].alt, caption: "Before and after: drag to compare" });
      }
      imgs.forEach(function (img) { list.push({ type: "img", src: img.dataset.src, alt: img.alt, caption: img.dataset.caption || "" }); });
      return list;
    }

    function preload(i) {
      var s = slides[i];
      if (s && s.type === "img") { var im = new Image(); im.src = s.src; }
    }

    function render() {
      var s = slides[index];
      stage.innerHTML = "";
      if (s.type === "ba") {
        stage.appendChild(buildBeforeAfter(s.before, s.after, s.alt, true));
      } else {
        var img = document.createElement("img");
        img.src = s.src; img.alt = s.alt; img.className = "lb-img";
        stage.appendChild(img);
      }
      captionEl.textContent = s.caption;
      counterEl.textContent = (index + 1) + " / " + slides.length;
      prevBtn.disabled = slides.length < 2;
      nextBtn.disabled = slides.length < 2;
      preload((index + 1) % slides.length);
      preload((index - 1 + slides.length) % slides.length);
    }

    function go(step) {
      if (slides.length < 2) return;
      index = (index + step + slides.length) % slides.length;
      render();
    }

    function open(card, btn) {
      slides = slidesFor(card);
      if (!slides.length) return;
      index = 0;
      opener = btn;
      titleEl.textContent = card.querySelector("h3").textContent.trim();
      render();
      box.showModal();
      document.documentElement.classList.add("lb-open");
      closeBtn.focus();
      track("open_project", { project: titleEl.textContent });
    }

    function close() { box.close(); }

    document.querySelectorAll(".work-card").forEach(function (card) {
      var btn = card.querySelector(".work-open");
      btn.addEventListener("click", function () { open(card, btn); });
    });

    prevBtn.addEventListener("click", function () { go(-1); });
    nextBtn.addEventListener("click", function () { go(1); });
    closeBtn.addEventListener("click", close);

    box.addEventListener("close", function () {
      stage.innerHTML = "";
      document.documentElement.classList.remove("lb-open");
      if (opener) opener.focus();
    });

    // Click on the dark backdrop (outside the image) closes it
    box.addEventListener("click", function (e) { if (e.target === box || e.target === stage) close(); });

    // Keyboard: arrows to move, Esc closes (native), Tab stays inside (focus trap)
    box.addEventListener("keydown", function (e) {
      var onRange = e.target.classList && e.target.classList.contains("ba-range");
      if (e.key === "ArrowRight" && !onRange) { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft" && !onRange) { e.preventDefault(); go(-1); }
      if (e.key === "Tab") {
        var f = Array.prototype.filter.call(box.querySelectorAll("button, input, [href]"), function (el) { return !el.disabled && el.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // Touch / mouse swipe
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

  // ---------- 8. Optional walkthrough video ----------
  function initVideo() {
    var wrap = document.querySelector("[data-walkthrough]");
    if (!wrap) return;
    if (!CONFIG.walkthroughVideo) { wrap.hidden = true; return; }
    var video = wrap.querySelector("video");
    if (CONFIG.walkthroughPoster) video.poster = CONFIG.walkthroughPoster;
    function load() {
      if (video.dataset.loaded) return;
      video.dataset.loaded = "1";
      video.src = CONFIG.walkthroughVideo;
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) video.play().catch(function () {});
    }
    whenNear(wrap, load);
  }

  // ---------- 9. Founder photos (initials until a photo is set) ----------
  function initFounders() {
    document.querySelectorAll("[data-founder]").forEach(function (fig) {
      var src = CONFIG.founderPhotos[fig.dataset.founder];
      if (!src) return;
      var img = document.createElement("img");
      img.src = src; img.alt = fig.dataset.alt || ""; img.loading = "lazy";
      img.width = 400; img.height = 500;
      fig.innerHTML = "";
      fig.appendChild(img);
      fig.removeAttribute("aria-hidden");
      fig.classList.add("has-photo");
    });
  }

  // ---------- 10. Calendly inline embed (loads when the section is near) ----------
  function initCalendly() {
    var holder = document.getElementById("book");
    if (!holder) return;
    if (!CONFIG.bookingUrl) { holder.hidden = true; return; }
    whenNear(holder, function () {
      var widget = holder.querySelector(".calendly-inline-widget");
      widget.dataset.url = CONFIG.bookingUrl + (CONFIG.bookingUrl.indexOf("?") > -1 ? "&" : "?") + "hide_gdpr_banner=1&primary_color=3d5a45";
      var s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    });
  }

  function whenNear(el, fn) {
    if (!("IntersectionObserver" in window)) { fn(); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); fn(); }
    }, { rootMargin: "600px 0px" });
    io.observe(el);
  }

  // ---------- 11. Sticky mobile CTA bar ----------
  // Shows after the hero scrolls away; hides while the contact section is on screen.
  function initMobileCta() {
    var bar = document.querySelector(".mobile-cta");
    var hero = document.querySelector(".hero");
    var contact = document.getElementById("contact");
    if (!bar || !hero || !contact || !("IntersectionObserver" in window)) return;
    var pastHero = false, atContact = false;
    function update() { bar.classList.toggle("is-visible", pastHero && !atContact); }
    new IntersectionObserver(function (e) { pastHero = !e[0].isIntersecting; update(); }).observe(hero);
    new IntersectionObserver(function (e) { atContact = e[0].isIntersecting; update(); }, { threshold: 0.05 }).observe(contact);
  }

  // ---------- 12. Contact form (Web3Forms) ----------
  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var status = form.querySelector(".form-status");
    var topic = document.getElementById("f-topic");
    var button = form.querySelector("button[type=submit]");

    // Buttons with data-topic pre-select "What do you need?"
    document.querySelectorAll("[data-topic]").forEach(function (link) {
      link.addEventListener("click", function () { topic.value = link.dataset.topic; });
    });

    function setStatus(kind, text) {
      status.className = "form-status is-" + kind;
      status.textContent = text;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Required fields + email format
      var firstBad = null;
      form.querySelectorAll("input[required], textarea[required], input[type=email]").forEach(function (input) {
        var ok = input.checkValidity() && (!input.required || input.value.trim() !== "");
        input.classList.toggle("is-invalid", !ok);
        input.setAttribute("aria-invalid", String(!ok));
        if (!ok && !firstBad) firstBad = input;
      });
      if (firstBad) {
        setStatus("error", "Please fill in the highlighted fields.");
        firstBad.focus();
        return;
      }

      // Honeypot: real people never tick this hidden box
      if (form.querySelector("[name=botcheck]").checked) return;

      if (!CONFIG.web3formsKey) {
        setStatus("error", "The form isn't connected yet." +
          (CONFIG.email ? " Please email " + CONFIG.email + " instead." : CONFIG.bookingUrl ? " Please book a call instead." : ""));
        return;
      }

      var data = Object.fromEntries(new FormData(form).entries());
      data.access_key = CONFIG.web3formsKey;
      data.subject = "Overyard website: " + topic.options[topic.selectedIndex].text + " from " + (data.company || data.name);
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
          setStatus("success", "Thanks. We got it and Kim Daryl will reply soon.");
          track("generate_lead", { topic: data.topic });
        })
        .catch(function () {
          setStatus("error", "Something went wrong sending the form." + (CONFIG.email ? " Please email " + CONFIG.email + "." : " Please try again or book a call."));
        })
        .finally(function () { button.disabled = false; });
    });
  }

  // ---------- start ----------
  onReady(function () {
    fillConfig();
    addSchema();
    addAnalytics();
    initHeader();
    initReveal();
    initHeroBeforeAfter();
    initLightbox();
    initVideo();
    initFounders();
    initCalendly();
    initMobileCta();
    initForm();
  });
})();
