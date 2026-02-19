export function render() {
  return `
    <section id="hero" class="section-full flex items-end">
      <!-- Background image -->
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-bg.jpg"
          alt="CAMD mural at Northeastern University"
          class="w-full h-full object-cover" style="object-position: center 85%;"
        />
      </div>

      <!-- Title text -->
      <div class="relative z-10 pl-12 pb-60">
        <span class="block text-white font-akshar font-bold tracking-tight" style="font-size: clamp(8rem, 13vw, 15.625rem); line-height: 0.85;">CAMD</span>
        <div class="flex items-end font-akshar" style="margin-top: -0.5em;">
          <p class="font-light" style="font-size: 3.3vw; line-height: 60px; color: #E9D842; max-width: 464px; padding-right: 0.3em; padding-left: 0.3em; padding-bottom: 4.55em;">
            a festival of arts, media, and design
          </p>
          <div class="font-bold tracking-tight" style="font-size: clamp(8rem, 13vw, 15.625rem); line-height: 0.85; margin-left: -0.3em;">
            <div>
              <span class="text-white">A</span>
            </div>
            <div>
              <span class="text-white">Y</span>
              <span class="text-camd-yellow font-light" style="font-size: 0.88em; margin-left: -0.2em;">2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function init() {
  // GSAP entrance animations will go here later
}
