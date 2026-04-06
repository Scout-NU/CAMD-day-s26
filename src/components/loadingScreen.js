import gsap from 'gsap';

export function render() {
  const el = document.createElement('div');
  el.id = 'loading-screen';
  el.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9999;
    background-color: #0a0a0a;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  el.innerHTML = `
    <div class="font-akshar" style="line-height: 0.85; font-size: clamp(3rem, 12vw, 10rem);">
      <div style="display:flex; gap:0.02em; overflow:hidden;">
        ${[...'CAMD'].map(l => `<span class="load-letter" style="color:#fff; font-weight:700; display:inline-block;">${l}</span>`).join('')}
      </div>
      <div style="display:flex; gap:0.02em; align-items:baseline; overflow:hidden;">
        ${[...'DAY'].map(l => `<span class="load-letter" style="color:#fff; font-weight:700; display:inline-block;">${l}</span>`).join('')}
        <span id="loading-year" style="color:#E9D842; font-weight:300; font-size:0.88em; margin-left:0.15em; display:inline-block; opacity:0;">2026</span>
      </div>
    </div>
  `;

  document.getElementById('app').prepend(el);
  document.body.style.visibility = 'visible';
  document.body.style.overflow = 'hidden';
}

export function init() {
  const letters = gsap.utils.toArray('.load-letter');
  const year    = document.getElementById('loading-year');
  const screen  = document.getElementById('loading-screen');

  gsap.set(letters, { yPercent: 110 });

  gsap.timeline()
    .to(letters, {
      yPercent: 0,
      duration: 0.55,
      ease: 'power3.out',
      stagger: 0.07,
    })
    .to(year, {
      opacity: 1,
      duration: 0.35,
      ease: 'power2.out',
    }, '-=0.1')
    .to({}, { duration: 0.5 })
    .to(screen, {
      yPercent: -100,
      duration: 0.75,
      ease: 'power3.inOut',
      onComplete: () => {
        screen.remove();
        document.body.style.overflow = '';
      },
    });
}