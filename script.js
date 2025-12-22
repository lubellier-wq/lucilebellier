// MENU HAMBURGER + ANNEE DU FOOTER — version robuste pour toutes les pages
(function () {
  function setYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  function bindMenu() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const btn = header.querySelector(".nav-toggle");
    const drawer = header.querySelector("#drawer");
    const overlay = header.querySelector(".overlay");
    if (!(btn && drawer && overlay)) return;

    let lastFocused = null;

    const openMenu = () => {
      lastFocused = document.activeElement;

      drawer.classList.add("open");
      overlay.hidden = false;
      requestAnimationFrame(() => overlay.classList.add("show"));

      btn.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-label", "Fermer le menu");
      drawer.setAttribute("aria-hidden", "false");

      document.body.classList.add("menu-open");

      // Met le focus dans le menu (accessibilité)
      const firstLink = drawer.querySelector("a");
      if (firstLink) firstLink.focus();
    };

    const closeMenu = () => {
      drawer.classList.remove("open");
      overlay.classList.remove("show");

      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Ouvrir le menu");
      drawer.setAttribute("aria-hidden", "true");

      document.body.classList.remove("menu-open");

      setTimeout(() => {
        if (!overlay.classList.contains("show")) overlay.hidden = true;
      }, 250);

      // Rend le focus à l’élément précédent
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    };

    btn.addEventListener("click", () => {
      drawer.classList.contains("open") ? closeMenu() : openMenu();
    });

    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) closeMenu();
    });

    header.querySelectorAll(".drawer a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setYear();
      bindMenu();
    });
  } else {
    setYear();
    bindMenu();
  }
})();
