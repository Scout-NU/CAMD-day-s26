export function render() {
  return `
    <section id="about" class="section-full relative">
      <!-- Background image (right side) -->
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/images/about-bg.jpg"
          alt="Ryder Hall at Northeastern University"
          class="h-full object-cover"
          style="width: 130%; margin-left: 10%;"
        />
      </div>

      <!-- White diagonal panel (left side) -->
      <div
        class="absolute top-0 left-0 h-full bg-camd-gray z-10"
        style="width: 43%; clip-path: polygon(0 0, 62% 0, 100% 100%, 0 100%);"
      >
        <div class="h-full flex flex-col justify-center pl-16 pr-24 max-w-[540px]">
          <!-- Stacked CAMD DAY 2026 logo -->
          <div class="mb-10 font-akshar font-normal leading-none" style="font-size: 40px; letter-spacing: 0.8px;">
            <span class="text-black">CAMD</span>
            <div class="pl-[1.6em]">
              <span class="text-black">A</span>
            </div>
            <div class="pl-[1.6em]">
              <span class="text-black">Y</span>
              <span style="color: #9F8F00;">2026</span>
            </div>
          </div>

          <!-- ABOUT CAMD DAY heading -->
          <h2
            class="font-akshar font-medium text-black mb-10"
            style="font-size: clamp(3rem, 6vw, 80px); line-height: 1.09;"
          >
            ABOUT<br />CAMD DAY
          </h2>

          <!-- Description -->
          <p
            class="font-akshar font-light text-black"
            style="font-size: clamp(1.25rem, 2.2vw, 40px); line-height: 1.35;"
          >
            CAMD is a community of creators, designers, and communicators in Ryder Hall at Northeastern, using data and emerging tech to solve real problems and push what's possible.
          </p>
        </div>
      </div>
    </section>
  `;
}

export function init() {
  // GSAP scroll-triggered fade-in for text content will go here
}
