// MENU HAMBURGER — version robuste pour TOUTES les pages
(function () {
  function bindMenu() {
    const header  = document.querySelector('.site-header');
    if (!header) return;

    const btn     = header.querySelector('.nav-toggle');
    const drawer  = header.querySelector('#drawer');
    const overlay = header.querySelector('.overlay');

    if (!(btn && drawer && overlay)) return;

    const openMenu = () => {
      drawer.classList.add('open');
      overlay.hidden = false;        // réaffiche l’overlay
      // laisse un frame pour activer l'animation d'opacité
      requestAnimationFrame(() => overlay.classList.add('show'));
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
      // cache complètement l’overlay après l’anim
      setTimeout(() => {
        if (!overlay.classList.contains('show')) overlay.hidden = true;
      }, 250);
    };

    btn.addEventListener('click', () => {
      drawer.classList.contains('open') ? closeMenu() : openMenu();
    });
    overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) closeMenu();
    });
    header.querySelectorAll('.drawer a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });
  }

  // se lie immédiatement si possible, sinon à DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindMenu);
  } else {
    bindMenu();
  }
})();
