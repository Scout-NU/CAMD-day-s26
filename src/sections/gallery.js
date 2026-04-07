import { urlFor } from "../sanity/imageBuilder";
import { client } from "../sanity/client";

const YEAR = new Date().getFullYear();
const GALLERY_QUERY = `
*[_type == "year" && year == ${YEAR}][0] {
  year,
  "images": gallery.images[] {
    asset,
    alt,
    caption
  }
}`;

let allImages = [];
let currentIndex = 0;

function renderImage(image, idx) {
  const imageAsset = image?.asset;
  if (!imageAsset) return "";
  const src = urlFor(imageAsset).width(600).url();

  return `
    <div class="relative overflow-hidden bg-camd-gray-mid aspect-[4/3] cursor-pointer flex-shrink-0" style="height: calc(33.333% - 8px);" data-index="${idx}">
      <img
        src="${src}"
        alt="${image.alt || ""}"
        class="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
    </div>
  `;
}

function openModal(index) {
  const modal = document.getElementById("gallery-modal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  showModalImage(index);
}

function closeModal() {
  const modal = document.getElementById("gallery-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function showModalImage(index) {
  currentIndex = (index + allImages.length) % allImages.length;
  const image = allImages[currentIndex];
  const src = urlFor(image.asset).width(1600).url();
  document.getElementById("modal-img").src = src;
  document.getElementById("modal-img").alt = image.alt || "";
  document.getElementById("modal-caption").textContent = image.caption || "";
}

export function render() {
  return `
    <section id="gallery" class="section-full font-akshar px-5 py-16 grid grid-cols-none grid-rows-[auto_auto_1fr]">

      <h1 class="text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] font-medium leading-tight mb-6 pl-12 shrink-0">
        GALLERY
      </h1>

      <p class="w-full font-akshar font-light text-left text-black pl-12 shrink-0"
         style="font-size: 1.2vw; line-height: 1.5;">
        Photos by Charles Gauthier/Northeastern University
      </p>

      <div id="gallery-scroll" class="pl-12 w-full overflow-x-auto no-scrollbar flex flex-col flex-wrap gap-3 content-start h-full"></div>

    </section>

    <!-- Modal -->
    <div id="gallery-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center font-akshar bg-black/80">
      <button id="modal-prev"
              class="absolute left-10 top-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              style="font-size: 2.5rem; line-height: 1;">
        &#8249;
      </button>

      <div class="max-h-[80vh] max-w-[70vw] flex flex-col items-start mx-32">
        <img id="modal-img" src="" alt=""
             class="object-contain"
             style="max-height: 72vh; max-width: 70vw;" />
        <p id="modal-caption"
           class="text-white font-medium mt-3"
           style="font-size: 24px; line-height: 1.5;"></p>
      </div>

      <button id="modal-next"
              class="absolute right-10 top-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              style="font-size: 2.5rem; line-height: 1;">
        &#8250;
      </button>

    </div>
  `;
}

export async function init() {
  await loadGalleryImages();
  initModalFunctionality();
}

async function loadGalleryImages() {
  const container = document.getElementById("gallery-scroll");

  try {
    const data = await client.fetch(GALLERY_QUERY);
    const images = data?.images;
    if (!images?.length) return;

    allImages = images;
    container.innerHTML = images.map((img, i) => renderImage(img, i)).join("");
  } catch (err) {
    console.error("Gallery: failed to load images from Sanity", err);
  }
}

function initModalFunctionality() {
  const container = document.getElementById("gallery-scroll");

  // Open Modal listener
  container.addEventListener("click", (e) => {
    const image = e.target.closest("[data-index]");
    console.log("Clicked image index:", image?.dataset.index);
    if (!image) return;
    openModal(parseInt(image.dataset.index));
  });

  // Modal arrows
  document.getElementById("modal-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    showModalImage(currentIndex - 1);
  });
  document.getElementById("modal-next").addEventListener("click", (e) => {
    e.stopPropagation();
    showModalImage(currentIndex + 1);
  });

  // Modal close
  document.getElementById("gallery-modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Modal keyboard support
  document.addEventListener("keydown", (e) => {
    if (document.getElementById("gallery-modal").classList.contains("hidden"))
      return;
    if (e.key === "ArrowRight") showModalImage(currentIndex + 1);
    if (e.key === "ArrowLeft") showModalImage(currentIndex - 1);
    if (e.key === "Escape") closeModal();
  });
}
