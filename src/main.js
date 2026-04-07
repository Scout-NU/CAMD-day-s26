import './styles/global.css';

import { render as renderLoadingScreen, init as initLoadingScreen } from './components/loadingScreen.js';

import { render as renderNav,    init as initNav }    from './components/navbar.js';
import { render as renderHero,   init as initHero }   from './sections/hero.js';
import { render as renderRecap,  init as initRecap }  from './sections/recap.js';
import { render as renderGallery, init as initGallery } from './sections/gallery.js';
import { render as renderSchedule, init as initSchedule } from './sections/schedule.js';
import { render as renderAbout,  init as initAbout }  from './sections/about.js';
import { render as renderDepts,  init as initDepts }  from './sections/departments.js';
import { render as renderFooter, init as initFooter } from './sections/footer.js';

const app = document.getElementById('app');

app.innerHTML = [
  renderNav(),
  renderHero(),
  renderRecap(),
  renderGallery(),
  renderSchedule(),
  renderAbout(),
  renderDepts(),
  renderFooter(),
].join('');

initNav();
initHero();
initRecap();
initGallery();
initSchedule();
initAbout();
initDepts();
initFooter();

renderLoadingScreen();
initLoadingScreen();