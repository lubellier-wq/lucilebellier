// Met à jour l'année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();
// Menu dépliant accessible
const toggleBtn = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

if (toggleBtn && menu) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  // Fermer le menu après clic sur un lien (mobile)
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });
  });
}
