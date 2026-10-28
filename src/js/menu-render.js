import { menu } from '../data/menu.js';
import { getLang } from '../i18n/index.js';

function formatPrice(price) {
  return `CHF ${price.toFixed(2)}`;
}

function render() {
  const jumpList = document.querySelector('[data-menu-jump]');
  const sections = document.querySelector('[data-menu-sections]');
  if (!jumpList || !sections) return;

  const lang = getLang();

  jumpList.innerHTML = menu
    .map((cat) => `<a href="#${cat.id}">${cat.name[lang]}</a>`)
    .join('');

  sections.innerHTML = menu
    .map(
      (cat) => `
      <section class="menu-category" id="${cat.id}" data-reveal>
        <div class="menu-category__head">
          <h2>${cat.name[lang]}</h2>
          <p class="menu-category__note">${cat.note[lang]}</p>
        </div>
        <ul class="menu-list">
          ${cat.items
            .map(
              (item) => `
            <li>
              <div class="menu-item__row">
                <span class="menu-item__name">${item.name[lang]}</span>
                <span class="menu-item__price">${formatPrice(item.price)}</span>
              </div>
              ${item.desc ? `<p class="menu-item__desc">${item.desc[lang]}</p>` : ''}
            </li>`
            )
            .join('')}
        </ul>
      </section>`
    )
    .join('');
}

export function initMenuRender() {
  if (!document.querySelector('[data-menu-sections]')) return;
  render();
  window.addEventListener('i18n:change', render);
}
