export function render() {
  return `
    <section id="about" class="section-full relative">
      <!-- Background image -->
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/images/about-bg.jpg"
          alt="Ryder Hall at Northeastern University"
          class="w-full h-full object-cover md:w-auto"
          style=""
          id="about-bg-img"
        />
      </div>

      <!-- Mobile: centered card over the image -->
      <div class="absolute inset-0 z-10 flex items-center justify-center px-6 md:hidden">
        <div class="bg-white px-8 py-10 text-center max-w-md shadow-lg">
          <h2
            class="font-akshar font-medium text-black text-3xl sm:text-4xl mb-4"
            style="line-height: 1.09;"
          >
            ABOUT<br />CAMD DAY
          </h2>
          <p
            class="font-akshar font-light text-black text-base sm:text-lg"
            style="line-height: 1.35;"
          >
            CAMD is a community of creators, designers, and communicators in Ryder Hall at Northeastern, using data and emerging tech to solve real problems and push what's possible.
          </p>
          <p
            class="font-akshar font-light text-black text-base sm:text-lg mt-4"
            style="line-height: 1.35;"
          >
            On CAMD Day, explore this community's dynamic research, experiential learning and creative impact through live performances, engaging panels, work showcases, exhibitions, technology demonstrations, and more.
          </p>
        </div>
      </div>

      <!-- Desktop: diagonal panel (unchanged) -->
      <div
        class="absolute top-0 left-0 h-full bg-white z-10 hidden md:block md:w-[43%]"
        id="about-panel"
        style="clip-path: none;"
      >
        <div class="h-full flex flex-col justify-center gap-10 pl-[8%] pr-[10%]" style="max-width: 80%;">
          <h2
            class="font-akshar font-medium text-black"
            style="font-size: 5vw; line-height: 1.09;"
          >
            ABOUT<br />CAMD DAY
          </h2>
          <p
            class="font-akshar font-light text-black"
            style="font-size: 2vw; line-height: 1.35;"
          >
            CAMD is a community of creators, designers, and communicators in Ryder Hall at Northeastern, using data and emerging tech to solve real problems and push what's possible.
          </p>
          <p
            class="font-akshar font-light text-black"
            style="font-size: 2vw; line-height: 1.35;"
          >
            On CAMD Day, explore this community's dynamic research, experiential learning and creative impact through live performances, engaging panels, work showcases, exhibitions, technology demonstrations, and more.
          </p>
        </div>
      </div>
    </section>
  `;
}

export function init() {
  // GSAP scroll-triggered fade-in for text content will go here
}
