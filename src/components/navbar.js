export function render() {
  return `
    <nav id="navbar" class="fixed top-0 w-full z-50 flex justify-end gap-14 px-16 py-6 transition-transform duration-300 ease-in-out">
      <a href="#about"       data-section="about"       class="nav-link text-white text-4xl font-akshar transition-colors">ABOUT</a>
      <a href="#departments" data-section="departments" class="nav-link text-white text-4xl font-akshar transition-colors">DEPARTMENTS</a>
      <a href="#speakers" data-section="speakers" class="nav-link text-white text-4xl font-akshar transition-colors">SPEAKERS</a>
      <a href="#schedule"    data-section="schedule"    class="nav-link text-white text-4xl font-akshar transition-colors">SCHEDULE</a>
    </nav>
  `;
}

export function init() {
  const navbar = document.getElementById('navbar');
  const links  = navbar.querySelectorAll('.nav-link');
  const sections = [...links].map(l => document.getElementById(l.dataset.section)).filter(Boolean);

  const ACTIVE_DARK  = '#facc15';
  const ACTIVE_LIGHT = '#902342';
  const TEXT_DARK    = '#ffffff';
  const TEXT_LIGHT   = '#000000';

  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.style.transform = y > lastY && y > 80 ? 'translateY(-100%)' : 'translateY(0)';
    lastY = y;
  }, { passive: true });

  function getActiveSection() {
    const mid = window.scrollY + window.innerHeight / 2;
    let active = sections[0];
    for (const s of sections) {
      if (s.offsetTop <= mid) active = s;
    }
    return active?.id;
  }

  function getNavLuminance() {
    const h = navbar.offsetHeight;
    const candidates = [...document.querySelectorAll('section, [data-bg], div[style*="background"]')];
    let bgColor = '#000000';
    for (const el of candidates) {
      const r = el.getBoundingClientRect();
      if (r.top <= h && r.bottom >= 0) {
        const bg = window.getComputedStyle(el).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') bgColor = bg;
      }
    }
    const m = bgColor.match(/\d+(\.\d+)?/g);
    if (!m) return 0;
    const [r, g, b] = m.map(Number);
    const toLinear = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  }

  function applyStyles() {
    const activeId  = getActiveSection();
    const isLight   = getNavLuminance() > 0.35;
    const textColor   = isLight ? TEXT_LIGHT : TEXT_DARK;
    const activeColor = isLight ? ACTIVE_LIGHT : ACTIVE_DARK;

    links.forEach(l => {
      const isActive = l.dataset.section === activeId;
      l.style.color = isActive ? activeColor : textColor;
      l.onmouseenter = () => { if (!isActive) l.style.color = activeColor; };
      l.onmouseleave = () => { if (!isActive) l.style.color = textColor; };
    });
  }

  window.addEventListener('scroll', applyStyles, { passive: true });
  window.addEventListener('resize', applyStyles, { passive: true });
  applyStyles();
}