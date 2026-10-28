export function initNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const panel = document.querySelector('[data-mobile-nav]');

  if (!toggle || !panel) return;

  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
    document.body.style.overflow = '';
  };

  const open = () => {
    toggle.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? close() : open();
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      close();
      toggle.focus();
    }
  });

  const media = window.matchMedia('(min-width: 60rem)');
  media.addEventListener('change', (event) => {
    if (event.matches) close();
  });
}
