import { en } from './en.js';
import { fr } from './fr.js';

const DICTS = { en, fr };
const STORAGE_KEY = 'mdc-lang';
const DEFAULT_LANG = 'en';

function resolve(dict, path) {
  return path.split('.').reduce((node, key) => (node && key in node ? node[key] : undefined), dict);
}

export function getLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'fr') return stored;
  } catch {
    /* localStorage unavailable (private mode, etc.) — fall back to default */
  }
  return DEFAULT_LANG;
}

function applyTranslations(lang) {
  const dict = DICTS[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = resolve(dict, el.getAttribute('data-i18n'));
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.getAttribute('data-i18n-attr')
      .split('|')
      .forEach((pair) => {
        const [attr, path] = pair.split(':');
        const value = resolve(dict, path);
        if (attr && typeof value === 'string') el.setAttribute(attr, value);
      });
  });

  const page = document.body.getAttribute('data-i18n-page');
  if (page) {
    const title = resolve(dict, `meta.${page}.title`);
    const description = resolve(dict, `meta.${page}.description`);
    if (title) document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }

  document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang-switch') === lang));
  });

  document.documentElement.lang = lang;
}

export function setLang(lang) {
  if (lang !== 'en' && lang !== 'fr') return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore persistence failures */
  }
  applyTranslations(lang);
  window.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
}

export function t(path) {
  return resolve(DICTS[getLang()], path);
}

export function initI18n() {
  const lang = getLang();
  applyTranslations(lang);

  document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-switch')));
  });

  window.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
}
