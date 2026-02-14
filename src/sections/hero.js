export function render() {
  return `
    <section id="hero" class="section-full flex items-end">
      <!-- Background image -->
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-bg.jpg"
          alt="CAMD mural at Northeastern University"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Title text -->
      <div class="relative z-10 pl-12 pb-16">
        <h1 class="font-akshar font-bold leading-[0.86] tracking-tight">
          <span class="block text-white text-[clamp(6rem,13vw,15.625rem)]">CAMD</span>
          <span class="block text-white text-[clamp(6rem,13vw,15.625rem)] pl-[0.5em]">A</span>
          <span class="inline text-white text-[clamp(6rem,13vw,15.625rem)] pl-[0.5em]">Y</span>
          <span class="inline text-camd-red text-[clamp(5rem,11.5vw,13.75rem)] font-light">2026</span>
        </h1>
      </div>
    </section>
  `;
}

export function init() {
  // GSAP entrance animations will go here later
}
