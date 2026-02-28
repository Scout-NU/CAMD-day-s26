const SPEAKERS_PER_PAGE = 4;

// Example speakers data – add more for multiple carousel pages (4 per page)
const speakers = [
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
  { name: 'TBD', image: null },
];

function speakerCard(s) {
  return `
    <div class="flex flex-col items-start w-full min-w-0">
      <div class="w-full h-96 flex-shrink-0" style="background-color: #D9D9D9;"></div>
      <p class="mt-4 text-2xl sm:text-4xl font-semibold tracking-wide">${s.name}</p>
    </div>
  `;
}

function speakerSlide(speakersInSlide) {
  return `
    <div class="speaker-slide shrink-0 overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      ${speakersInSlide.map(speakerCard).join('')}
    </div>
  `;
}

export function render() {
  const slideCount = Math.ceil(speakers.length / SPEAKERS_PER_PAGE);
  const slides = [];
  for (let i = 0; i < slideCount; i++) {
    slides.push(speakers.slice(i * SPEAKERS_PER_PAGE, (i + 1) * SPEAKERS_PER_PAGE));
  }

  const dotsHtml = Array.from({ length: slideCount }, (_, i) => `
    <button
      type="button"
      class="speaker-dot inline-block w-3 h-3 rounded-full cursor-pointer transition-colors hover:opacity-80 ${i === 0 ? 'filled' : ''}"
      data-slide="${i}"
      aria-label="Go to slide ${i + 1}"
      style="${i === 0 ? 'background-color: #7b1236;' : 'border: 2px solid #7b1236; background: transparent;'}"
    ></button>
  `).join('');

  return `
    <section
      id="speakers"
      class="section-full relative overflow-hidden font-akshar bg-gray-100 py-16 px-5"
    >
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 px-6 sm:px-12">
        <h1 class="text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] font-medium leading-tight">
          FEATURED SPEAKERS
        </h1>
        <div class="flex items-center gap-3 lg:pt-4 lg:pr-2 order-last lg:order-none">
          ${dotsHtml}
        </div>
      </div>

      <div class="mt-12 px-6 sm:px-12">
        <div class="overflow-hidden" id="speaker-carousel-viewport">
          <div id="speaker-carousel-track" class="flex transition-transform duration-500 ease-out" style="transform: translateX(0);">
            ${slides.map(speakerSlide).join('')}
          </div>
        </div>
      </div>

      <div
        class="pointer-events-none absolute -right-40 bottom-0 w-80 h-80"
        style="background-color: #e9d842; clip-path: polygon(55% 0, 100% 0, 100% 100%, 0 100%);"
      ></div>
    </section>
  `;
}

export function init() {
  const viewport = document.getElementById('speaker-carousel-viewport');
  const track = document.getElementById('speaker-carousel-track');
  const dots = document.querySelectorAll('.speaker-dot');

  if (!viewport || !track || !dots.length) return;

  const slideCount = dots.length;
  const slides = track.querySelectorAll('.speaker-slide');

  function updateSlideWidths() {
    const viewportWidth = viewport.offsetWidth;
    track.style.width = `${slideCount * viewportWidth}px`;
    slides.forEach((slide) => {
      slide.style.flex = 'none';
      slide.style.width = `${viewportWidth}px`;
    });
  }
  updateSlideWidths();
  window.addEventListener('resize', updateSlideWidths);

  function goToSlide(index) {
    const clamped = Math.max(0, Math.min(index, slideCount - 1));
    const viewportWidth = viewport.offsetWidth;
    const translateX = clamped * viewportWidth;
    track.style.transform = `translateX(-${translateX}px)`;
    dots.forEach((dot, i) => {
      const isActive = i === clamped;
      dot.classList.toggle('filled', isActive);
      dot.style.backgroundColor = isActive ? '#7b1236' : 'transparent';
      dot.style.border = isActive ? 'none' : '2px solid #7b1236';
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.slide, 10);
      goToSlide(index);
    });
  });
}
