import './styles/global.css';

import { render as renderNav,    init as initNav }    from './components/navbar.js';
import { render as renderHero,   init as initHero }   from './sections/hero.js';
import { render as renderAbout,  init as initAbout }  from './sections/about.js';
import { render as renderDepts,  init as initDepts }  from './sections/departments.js';
import { render as renderDean,   init as initDean }   from './sections/dean.js';
import { render as renderSpeakers, init as initSpeakers } from './sections/speakers.js';
import { render as renderSchedule, init as initSchedule } from './sections/schedule.js';
import { render as renderFooter, init as initFooter } from './sections/footer.js';

const app = document.getElementById('app');

app.innerHTML = [
  renderNav(),
  renderHero(),
  renderAbout(),
  renderDepts(),
  // renderDean(),
  renderSpeakers(),
  renderSchedule(),
  renderFooter(),
].join('');

initNav();
initHero();
initAbout();
initDepts();
// initDean();
initSpeakers();
initSchedule();
initFooter();
