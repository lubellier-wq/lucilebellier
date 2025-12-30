// ANNEE DU FOOTER + lien actif dans la barre de menu
(function () {
  function setYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  function setActiveNavLink() {
    const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".topbar__menu a").forEach((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === current) a.classList.add("is-active");
    });
  }

  function init() {
    setYear();
    setActiveNavLink();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
