/* --- FOOTER : année automatique --- */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* --- MENU HAMBURGER --- */
const toggleBtn = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

if (toggleBtn && menu) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen); // anime les barres en croix
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  // Ferme le menu après clic sur un lien
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });
  });
}
