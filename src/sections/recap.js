export function render() {
  return `
    <section id="recap" class="h-screen w-full relative overflow-hidden font-akshar bg-white px-5 py-16 flex flex-col">
      <h1 class="text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] font-medium leading-tight mb-6 pl-12 shrink-0">
        Event Recap
      </h1>

      <div class="pl-12 flex-1 min-h-0">
        <div class="relative cursor-pointer w-full h-full" id="recap-player">
          <video
            id="recap-video"
            class="w-full h-full object-contain block"
            poster="/assets/images/recap_img.jpg"
            playsinline
            preload="metadata"
          >
            <source src="/assets/videos/recap.mp4" type="video/mp4" />
          </video>
          <div id="recap-play-btn" class="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="38" fill="rgba(0,0,0,0.5)" stroke="white" stroke-width="2"/>
              <polygon points="32,24 32,56 58,40" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function init() {
  const player = document.getElementById('recap-player');
  const video = document.getElementById('recap-video');
  const playBtn = document.getElementById('recap-play-btn');

  player.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.style.opacity = '0';
      playBtn.style.pointerEvents = 'none';
    } else {
      video.pause();
      playBtn.style.opacity = '1';
      playBtn.style.pointerEvents = '';
    }
  });

  video.addEventListener('ended', () => {
    playBtn.style.opacity = '1';
    playBtn.style.pointerEvents = '';
  });
}
