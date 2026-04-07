export function render() {
  return `
    <section id="recap" class="h-screen w-full relative overflow-hidden font-akshar bg-camd-gray px-5 py-16 flex flex-col">
      <h1 class="text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] font-medium leading-tight mb-6 pl-12 shrink-0">
        Event Recap
      </h1>

      <div class="pl-12 flex-1 min-h-0">
        <img
          src="/assets/images/recap_img.jpg"
          alt="Event Recap"
          class="w-full h-full object-cover block"
        />
      </div>
    </section>
  `;
}

export function init() {}
