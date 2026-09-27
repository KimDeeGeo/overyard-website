/* ==========================================================================
   OVERYARD: site scripts

   SETTINGS YOU CAN EDIT
   ========================================================================== */

// Your calendar booking link (Calendly, Cal.com, Google Calendar, etc.).
// Every "Book a call" button on the page will open this link.
// Leave empty ("") to send those buttons to the contact section instead.
const BOOKING_URL = "";

// ============ CONNECT FORM SERVICE HERE ============
// Paste the endpoint URL from your form service, for example:
//   Formspree: "https://formspree.io/f/abcdwxyz"
//   Basin:     "https://usebasin.com/f/abc123"
// Leave empty ("") and the form only shows a thank-you message (nothing is sent).
const FORM_ENDPOINT = "";

/* ==========================================================================
   You shouldn't need to edit below this line.
   ========================================================================== */

(function () {
  "use strict";

  // ---- Booking links ----
  if (BOOKING_URL) {
    document.querySelectorAll("[data-booking-link]").forEach(function (link) {
      link.href = BOOKING_URL;
      link.target = "_blank";
      link.rel = "noopener";
    });
  }

  // ---- Mobile menu ----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  // ---- Header border once the page scrolls ----
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Catch images that failed before this script loaded ----
  document.querySelectorAll(".media img").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) img.parentNode.classList.add("is-missing");
  });

  // ---- Fade-in on scroll ----
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ---- Contact form ----
  var form = document.getElementById("contact-form");
  var status = form.querySelector(".form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple check: required fields filled, email looks valid
    var firstBad = null;
    form.querySelectorAll("input[required], input[type=email]").forEach(function (input) {
      var ok = input.checkValidity() && (!input.required || input.value.trim() !== "");
      input.classList.toggle("is-invalid", !ok);
      input.setAttribute("aria-invalid", String(!ok));
      if (!ok && !firstBad) firstBad = input;
    });
    if (firstBad) {
      status.className = "form-status is-error";
      status.textContent = "Please fill in the highlighted fields.";
      firstBad.focus();
      return;
    }

    function done() {
      form.reset();
      status.className = "form-status is-success";
      status.textContent = "Thanks. We got your project and will reply soon.";
    }

    if (!FORM_ENDPOINT) { done(); return; }

    var button = form.querySelector("button[type=submit]");
    button.disabled = true;
    fetch(FORM_ENDPOINT, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (res) { if (!res.ok) throw new Error(res.status); done(); })
      .catch(function () {
        status.className = "form-status is-error";
        status.textContent = "Something went wrong. Please email us instead.";
      })
      .finally(function () { button.disabled = false; });
  });

  // ---- Footer year ----
  document.getElementById("year").textContent = new Date().getFullYear();
})();
