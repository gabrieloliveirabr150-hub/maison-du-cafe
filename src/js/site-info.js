import { hours } from '../data/hours.js';
import { location } from '../data/location.js';
import { getLang, t } from '../i18n/index.js';

const DAY_INDEX = [6, 0, 1, 2, 3, 4, 5]; // JS getDay() 0=Sun -> hours[] index (0=Mon..6=Sun)

function renderHoursList(container) {
  const lang = getLang();
  const todayIndex = DAY_INDEX[new Date().getDay()];
  container.innerHTML = hours
    .map(
      (row, i) => `
        <li class="${i === todayIndex ? 'is-today' : ''}">
          <span class="day">${row.label[lang]}</span>
          <span class="time">${row.time}</span>
        </li>`
    )
    .join('');
}

function renderSiteInfo() {
  document.querySelectorAll('[data-hours-list]').forEach(renderHoursList);

  document.querySelectorAll('[data-location-address]').forEach((el) => {
    el.textContent = t('location.address');
  });

  document.querySelectorAll('[data-location-phone]').forEach((el) => {
    el.textContent = location.phoneDisplay;
    if (el.tagName === 'A') el.href = location.phoneHref;
  });

  document.querySelectorAll('[data-location-email]').forEach((el) => {
    el.textContent = location.email;
    if (el.tagName === 'A') el.href = location.emailHref;
  });

  document.querySelectorAll('[data-map-link]').forEach((el) => {
    el.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`;
  });
}

export function initSiteInfo() {
  renderSiteInfo();
  window.addEventListener('i18n:change', renderSiteInfo);
}
