export function render() {
  return `
    <section id="dean" class="section-full bg-camd-gray flex items-center justify-center">
      <div class="flex items-center w-full max-w-[1600px] px-16">
        <!-- Left side: Dean photo with starburst -->
        <div class="relative flex-shrink-0" style="width: 40%;">
          <img
            src="/assets/images/starburst.png"
            alt=""
            class="absolute"
            style="width: 60%; bottom: 0; left: 0; z-index: 0;"
          />
          <img
            src="/assets/images/dean.png"
            alt="R. Benjamin Knapp"
            class="relative z-10"
            style="width: 80%; margin-left: 10%;"
          />
        </div>

        <!-- Right side: Quote and attribution -->
        <div class="flex flex-col items-center justify-center" style="width: 60%; margin-top: -10%;">
          <p
            class="font-akshar font-medium text-black text-center"
            style="font-size: clamp(3rem, 5vw, 96px); line-height: 54px; max-width: 861px;"
          >
            &ldquo;Quote&rdquo;
          </p>
          <p
            class="font-akshar font-normal text-black text-right self-end mt-16"
            style="font-size: clamp(2rem, 3.3vw, 64px); line-height: 120px; max-width: 583px;"
          >
            - R. BENJAMIN KNAPP
          </p>
        </div>
      </div>
    </section>
  `;
}

export function init() {
  // GSAP fade-in on scroll will go here
}
