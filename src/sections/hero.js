export function render() {
  return `
    <section id="hero" class="section-full flex items-end">
      <!-- Background image -->
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-bg.jpg"
          alt="CAMD mural at Northeastern University"
          class="w-full h-full object-cover" style="object-position: 30% 85%;"
        />
      </div>

      <!-- Title text — single vw-based parent controls everything -->
      <div class="relative z-10 pl-12 pb-5">
        <div class="font-akshar" style="font-size: 12vw;">
          <span class="block text-white font-light tracking-tight" style="font-size: 0.25em; margin-bottom: 0.3em; margin-left: 0.3em;">MARCH 17, 2026</span>
          <span class="block text-white font-bold leading-[0.85] tracking-tight">CAMD</span>
          <div class="flex items-end" style="margin-top: -0.05em;">
            <p class="font-light" style="font-size: 0.25em; line-height: 1.2; color: #E9D842; width: 9em; padding-right: 0.2em; padding-left: 0.4em; padding-bottom: 8.8em;">
              a festival of arts, media, and design
            </p>
            <div class="font-bold tracking-tight leading-[0.85]" style="margin-left: -0.5em; margin-bottom: 1.07em;">
              <div><span class="text-white">A</span></div>
              <div>
                <span class="text-white">Y</span>
                <span class="text-camd-yellow font-light" style="font-size: 0.88em; color: #E9D842; margin-left: -0.2em;">2026</span>
              </div>
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
