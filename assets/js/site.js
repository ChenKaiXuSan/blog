/* Small, dependency-free interactions for the academic website. */
(function () {
  "use strict";
  const themeKey = "site-theme";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function savedTheme() {
    try { return window.localStorage.getItem(themeKey); }
    catch (_) { return null; }
  }

  function isDark() {
    const setting = savedTheme();
    return setting === "dark" || (setting !== "light" && prefersDark.matches);
  }

  function renderTheme() {
    const dark = isDark();
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");

    const icon = document.getElementById("theme-icon");
    const button = document.getElementById("theme-toggle");
    if (icon) {
      icon.classList.toggle("fa-sun", !dark);
      icon.classList.toggle("fa-moon", dark);
    }
    if (button) {
      button.setAttribute("aria-pressed", String(dark));
      button.setAttribute("aria-label", dark ? "Use light mode" : "Use dark mode");
    }
  }

  function closeNav(nav, toggle) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderTheme();

    const themeButton = document.getElementById("theme-toggle");
    if (themeButton) {
      themeButton.addEventListener("click", function () {
        try { window.localStorage.setItem(themeKey, isDark() ? "light" : "dark"); }
        catch (_) { document.documentElement.toggleAttribute("data-theme"); }
        renderTheme();
      });
    }

    if (typeof prefersDark.addEventListener === "function") {
      prefersDark.addEventListener("change", function () {
        if (savedTheme() !== "light" && savedTheme() !== "dark") renderTheme();
      });
    }

    const nav = document.getElementById("site-nav");
    const navToggle = document.getElementById("nav-toggle");
    if (nav && navToggle) {
      navToggle.addEventListener("click", function () {
        const opened = nav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(opened));
      });
      nav.addEventListener("click", function (event) {
        if (event.target.closest(".nav-links a")) closeNav(nav, navToggle);
      });
      window.addEventListener("resize", function () {
        if (window.innerWidth > 840) closeNav(nav, navToggle);
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeNav(nav, navToggle);
      });
    }

    const authorButton = document.querySelector(".author__urls-wrapper > button");
    const authorLinks = document.getElementById("author-links");
    if (authorButton && authorLinks) {
      authorButton.addEventListener("click", function () {
        const expanded = authorLinks.classList.toggle("is-open");
        authorButton.setAttribute("aria-expanded", String(expanded));
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          authorLinks.classList.remove("is-open");
          authorButton.setAttribute("aria-expanded", "false");
        }
      });
    }
  });
})();
