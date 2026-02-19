export function render() {
  return `
    <nav id="navbar" class="fixed top-0 w-full z-50 flex justify-end gap-14 px-16 py-6">
      <a href="#about" class="text-white text-4xl font-akshar hover:text-yellow-300 transition-colors">ABOUT</a>
      <a href="#departments" class="text-white text-4xl font-akshar hover:text-yellow-300 transition-colors">DEPARTMENTS</a>
      <a href="#schedule" class="text-white text-4xl font-akshar hover:text-yellow-300 transition-colors">SCHEDULE</a>
    </nav>
  `;
}

export function init() {
  // scroll-based nav styling will go here
}

// Dean and speaker section that will be added in eventually
// <a href="#dean" class="text-white text-4xl font-akshar hover:text-yellow-300 transition-colors">DEAN</a>
// <a href="#speakers" class="text-white text-4xl font-akshar hover:text-yellow-300 transition-colors">SPEAKERS</a>