import { initNav } from './nav.js';
import { initReveal } from './reveal.js';
import { initSiteInfo } from './site-info.js';
import { initMenuRender } from './menu-render.js';
import { initI18n } from '../i18n/index.js';

document.documentElement.classList.add('js');

initI18n();
initSiteInfo();
initMenuRender();
initNav();
initReveal();
