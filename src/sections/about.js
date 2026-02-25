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


        <!-- Content centered -->
        <div class="h-full flex flex-col justify-center gap-10 pl-[8%] pr-[10%] pt-[0%]" style="max-width: 80%;">
          <!-- ABOUT CAMD DAY heading -->
          <h2
            class="font-akshar font-medium text-black"
            style="font-size: 5vw; line-height: 1.09;"
          >
            ABOUT<br />CAMD DAY
          </h2>

          <!-- Description -->
          <p
            class="font-akshar font-light text-black"
            style="font-size: 2vw; line-height: 1.35;"
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
