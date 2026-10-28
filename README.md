# Maison du Café

Fictional specialty coffee bar website for the **OLVER** web design portfolio. Dark, cinematic, editorial —
deep charcoal and espresso brown, warm ivory type, muted copper accents, and real specialty-coffee photography.

This is a design/portfolio concept. The business, its menu, and its contact details are entirely fictional —
see the demo-content notice on the Contact page.

## Stack

- [Vite](https://vitejs.dev/) + vanilla JavaScript (ES modules), no framework
- Plain multi-page HTML (`index.html`, `menu.html`, `story.html`, `contact.html`)
- Hand-rolled scroll-reveal, mobile nav, menu renderer and EN/FR i18n engine — no UI dependencies

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Netlify deployment

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Both are also set in `netlify.toml` at the project root, so Netlify picks them up automatically.

No environment variables, server-side functions, or redirect rules are required; this is a fully static, multi-page site (four real `.html` files, not a single-page app), so direct navigation and page refreshes work with Netlify's default static-file serving — no rewrites needed.

## Project structure

```
index.html / menu.html / story.html / contact.html
public/
  favicon.svg
  images/
    photos/              licensed Unsplash photography, JPEG + WebP (see Credits)
src/
  data/
    menu.js               menu categories, items, descriptions (bilingual), CHF prices
    hours.js               weekly opening hours (bilingual day labels)
    location.js            phone / email / map query (demo data)
  i18n/
    en.js / fr.js           translation dictionaries (en is default)
    index.js                 i18n engine: get/set language, persistence, DOM sync
  js/
    main.js                 entry point, initializes everything below
    nav.js                   header, mobile menu toggle (accessible, keyboard + touch)
    site-info.js            renders footer + hours/address/phone/email blocks, marks "today"
    menu-render.js           renders the full menu page from data/menu.js, language-aware
    reveal.js                progressive-enhancement scroll reveal (respects prefers-reduced-motion)
  styles/
    tokens.css               palette, type scale, spacing, motion tokens
    base.css                 resets, base type, focus states, accessibility helpers
    components.css           header, mobile nav, language switcher, buttons, cards, footer, hours list
    page-hero.css, home.css, menu.css, story.css, contact.css    page-specific layout
```

## Language

English is the default language; French is available via the **EN / FR** switcher in the header (visible on
desktop and mobile, not hidden inside the hamburger menu). Switching re-renders all text in place — no page
reload, no navigation, scroll position is preserved. The choice is remembered in `localStorage` and re-applied
on every page load/navigation, and `<html lang>` is kept in sync with the active language.

Static copy uses `data-i18n="key.path"` attributes resolved against `src/i18n/{en,fr}.js`; image `alt` text uses
`data-i18n-attr="alt:key.path"`; data-driven content (menu items, opening hours) re-renders from bilingual
fields in `src/data/menu.js` and `src/data/hours.js` on language change. The street address, phone and email are
demo placeholders and are not translated (a street address doesn't change between languages); the `location.address`
key does carry a bilingual "Geneva"/"Genève" form used in the address display.

Because text swaps after the page's own script runs (there is no server-side rendering here), a returning visitor
whose stored preference is French may see a brief flash of the English fallback copy before the script applies
the translation. This is a standard trade-off for a client-only, dependency-free i18n implementation and was
judged acceptable for a static portfolio demo.

## Photography

All 10 photo slots use real photographs licensed from [Unsplash](https://unsplash.com/) (Unsplash License — free
to use, no attribution legally required; credited below anyway). Each was downloaded directly from
`images.unsplash.com`, resized and re-encoded locally to WebP (with a JPEG fallback via `<picture>`) using Pillow
— nothing is hotlinked, and no image is served from an external URL at runtime.

### Credits

| File | Photo | Photographer |
| --- | --- | --- |
| `hero-espresso-pour` | [Espresso dripping from metal portafilter](https://unsplash.com/photos/espresso-dripping-from-metal-portafilter-RZJRWMnd0DM) | Mohamed Shaffaf |
| `barista-hands-portafilter` | [Barista tamping coffee grounds into portafilter](https://unsplash.com/photos/barista-tamping-coffee-grounds-into-portafilter-M9nMWWDkDkM) | Kaylee Stoll |
| `latte-art-heart` | [Top view of heart latte coffee](https://unsplash.com/photos/XOhI_kW_TaM) | Nathan Dumlao |
| `latte-art-cappuccino` | [Close-up of latte art on a cappuccino](https://unsplash.com/photos/a-close-up-of-latte-art-on-a-cappuccino-GT5klubwZhI) | Panchanok Juntanarach |
| `pour-over-v60` | [Hot water pouring into a pour-over coffee filter](https://unsplash.com/photos/hot-water-pouring-into-a-pour-over-coffee-filter-a0v-gPTSopg) | Marie G. |
| `iced-coffee-glass` | [Hand holding a glass of iced coffee with cream](https://unsplash.com/photos/hand-holding-a-glass-of-iced-coffee-with-cream-LJPAmUnE-QM) | Rob Wingate |
| `pastries-croissants` | [A pile of freshly baked croissants on a wooden surface](https://unsplash.com/photos/a-pile-of-freshly-baked-croissants-on-a-wooden-surface-ikkTOvSkdEg) | Richard Bell |
| `cafe-interior-rustic` | [A rustic interior space with distressed walls and seating](https://unsplash.com/photos/gJ4tF7kiJl4) | Ting Chen |
| `coffee-beans-dark` | [Brown coffee beans on a black surface](https://unsplash.com/photos/fmc-tFMMiBs) | Łukasz Rawa |
| `cafe-terrace-night` | [A row of café tables and chairs at night](https://unsplash.com/photos/h7roZ9aDNKc) | János Venczák |

To replace any of these with different photography later: drop the new file(s) into `public/images/photos/`
(same naming convention, JPEG + WebP), update the `<picture>`/`<source>`/`<img>` tags referencing them, and
update the matching `alt` text.

## Demo content disclaimer

Maison du Café is not a real business. The address, phone number, email, prices and opening hours used across
the site are fictional placeholders created for this portfolio demonstration and are called out explicitly on
the Contact page. Replace all of them with real details before any production launch.

## Keeping this separate from other OLVER projects

This is a standalone project: its own `package.json`, its own dependencies, no shared code or git history with
other OLVER portfolio sites (e.g. Fade District, Maison Épure).
