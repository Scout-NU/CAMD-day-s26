export function render() {
  return `
    <section id="recap" class="section-full pt-9 font-akshar bg-camd-gray">
      <div class="w-full flex justify-center">
        <div class="w-full px-4" style="max-width:1565px;display:flex;flex-direction:column;gap:48px;align-items:flex-start;box-sizing:border-box;padding-left:78px;padding-right:78px;">
          <h2 style="color:#000;font-family:Akshar;font-size:clamp(32px,6.5vw,110px);font-style:normal;font-weight:500;line-height:clamp(36px,7.2vw,120px);text-align:left;margin:0;">
            Event Recap
          </h2>

          <div class="mb-0" style="width:100%;margin-top:0;">
            <img
              src="/assets/images/recap_img.jpg"
              alt="Event Recap"
              style="width:1565px;max-width:100%;height:auto;aspect-ratio:1562/1041;object-fit:contain;display:block;"
            />
          </div>
        </div>
      </div>
    </section>
  `;
}

export function init() {}
