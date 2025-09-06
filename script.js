/* --- FOOTER : année automatique --- */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===== MENU HAMBURGER — SLIDE-IN GAUCHE =====
const btn   = document.querySelector('.nav-toggle');
const drawer = document.getElementById('drawer');
const overlay = document.querySelector('.overlay');

function openMenu() {
  drawer.classList.add('open');
  overlay.classList.add('show'); overlay.hidden = false;
  btn.classList.add('open');
  btn.setAttribute('aria-expanded', 'true');
  drawer.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
  drawer.classList.remove('open');
  overlay.classList.remove('show');
  btn.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  drawer.setAttribute('aria-hidden', 'true');
  // masquer l'overlay après l'anim
  setTimeout(() => { if (!overlay.classList.contains('show')) overlay.hidden = true; }, 250);
}

if (btn && drawer && overlay) {
  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // clic en dehors ferme
  overlay.addEventListener('click', closeMenu);

  // Échap ferme
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeMenu();
  });

  // clic sur un lien -> ferme
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu());
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const header  = document.querySelector('.site-header');
  if (!header) return;

  const btn     = header.querySelector('.nav-toggle');
  const drawer  = header.querySelector('#drawer');
  const overlay = header.querySelector('.overlay');

  if (!(btn && drawer && overlay)) return;

  const openMenu = () => {
    drawer.classList.add('open');
    overlay.hidden = false;
    overlay.classList.add('show');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  };

  const closeMenu = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    // masque complètement l’overlay après l’anim
    setTimeout(() => { if (!overlay.classList.contains('show')) overlay.hidden = true; }, 250);
  };

  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeMenu();
  });

  header.querySelectorAll('.drawer a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
});
