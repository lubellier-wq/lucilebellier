/* --- FOOTER : année automatique --- */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

  

/* ===== MENU HAMBURGER — SLIDE-IN GAUCHE ===== */
.site-header {
  position: fixed; top: 0; left: 0; z-index: 1000;
}

/* Bouton hamburger (3 barres) */
.nav-toggle {
  display: flex; flex-direction: column; justify-content: space-between;
  width: 30px; height: 22px; margin: 10px; padding: 0;
  background: transparent; border: 0; cursor: pointer; z-index: 1101;
}
.nav-toggle .bar {
  width: 100%; height: 4px; background: #fff;  /* barres blanches sur ton fond rouge */
  border-radius: 2px; transition: transform .3s ease, opacity .3s ease;
}
/* anim en croix quand ouvert */
.nav-toggle.open .bar:nth-child(1){ transform: rotate(45deg) translate(5px,6px); }
.nav-toggle.open .bar:nth-child(2){ opacity: 0; }
.nav-toggle.open .bar:nth-child(3){ transform: rotate(-45deg) translate(5px,-6px); }

/* Overlay plein écran */
.overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,.5);
  backdrop-filter: blur(2px);
  z-index: 1100;
  opacity: 0; transition: opacity .25s ease;
}
.overlay.show { opacity: 1; }

/* Panneau qui glisse depuis la gauche */
.drawer {
  position: fixed; top: 60px; left: 10px;  /* sous le bouton, léger décalage */
  height: 70vh; width: min(320px, 86vw);
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0,0,0,.25);
  transform: translateX(-120%);  /* caché */
  transition: transform .3s ease;
  z-index: 1101;
  overflow: auto;
}
.drawer.open { transform: translateX(0); }

.drawer-menu { list-style: none; margin: 0; padding: 16px; }
.drawer-menu li + li { margin-top: 6px; }
.drawer-menu a {
  display: block; padding: 14px 16px; border-radius: 10px;
  color: #111; text-decoration: none; font-size: 1.05rem;
}
.drawer-menu a:hover,
.drawer-menu a:focus {
  background: rgba(244,196,48,.15);           /* doré clair */
  outline: 2px solid #F4C430; outline-offset: 2px;
}

/* Accessibilité : éviter que l'ancre soit cachée par l'entête fixée */
section { scroll-margin-top: 90px; }

/* Petites largeurs : occuper plus d’espace si besoin */
@media (max-width: 480px) {
  .drawer { top: 56px; left: 8px; height: 72vh; width: 90vw; }
}
