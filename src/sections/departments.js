export function render() {
  return `
    <section id="departments" class="section-full font-akshar bg-gray-100 px-5 flex flex-col pt-20 text-left" style="min-height: 100vh; overflow: visible; font-weight:300;">
        <div class="max-w-[1724px] mx-auto w-full flex flex-col h-full justify-center py-6">
            <!-- Header -->
            <h1 class="text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] font-medium leading-tight mb-6 pl-12 shrink-0 -mt-10">
              OUR DEPARTMENTS
            </h1>
            
            <!-- Mobile carousel -->
            <div id="mobile-carousel" class="block lg:hidden mb-6">
              <div class="mobile-carousel-inner flex overflow-x-auto snap-x snap-mandatory pb-6" style="-webkit-overflow-scrolling: touch; padding-left: calc((100% - 294px)/2); gap:16px;">
              </div>
            </div>

            <!-- Main Content -->
            <div class="hidden lg:grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-start flex-1 min-h-0">
                
                <!-- Department Navigation -->
                <nav class="flex flex-col gap-2" style="font-weight:300">
                    <div data-dept="architecture" class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-camd-maroon text-white cursor-pointer transition-colors hover:bg-camd-maroon-hover">
                        ARCHITECTURE
                    </div>
                    <div data-dept="art" class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-gray-100 text-black cursor-pointer transition-colors hover:bg-gray-200">
                        ART + DESIGN
                    </div>
                    <div data-dept="comm" class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-gray-100 text-black cursor-pointer transition-colors hover:bg-gray-200">
                        COMMUNICATION STUDIES
                    </div>
                    <div data-dept="journalism" class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-gray-100 text-black cursor-pointer transition-colors hover:bg-gray-200">
                        JOURNALISM
                    </div>
                    <div data-dept="music" class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-gray-100 text-black cursor-pointer transition-colors hover:bg-gray-200">
                        MUSIC
                    </div>
                    <div data-dept="theatre" class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-gray-100 text-black cursor-pointer transition-colors hover:bg-gray-200">
                        THEATRE
                    </div>
                </nav>

                <!-- Content Area -->
                <div id="dept-content" style="display: block;">
                    <img id="dept-image" src="/assets/images/departments-img.svg" 
                        alt="" 
                        style="float: right; width: 350px; height: 400px; object-fit: contain; margin-left: 24px; margin-bottom: 16px; margin-top: -60px; margin-right: 80px;">

                      <p id="dept-description" class="dept-description font-akshar font-light text-black" style="font-size: 2vw; line-height: 1.45; font-weight:300; margin-top:0; padding-top:0;"></p>

                    <div style="clear: both;"></div>

                    <div style="display: flex; justify-content: flex-end; padding-top: 16px; padding-bottom: 8px; padding-right: 48px;">
                        <a id="dept-link" href="https://camd.northeastern.edu/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-7 py-2 bg-camd-maroon text-white text-2xl font-light rounded-sm cursor-pointer transition-colors hover:bg-camd-maroon-hover font-[300] leading-[70px]">
                            LEARN MORE
                            <img src="/assets/images/right-arrow.svg" 
                                alt="" 
                                class="w-[10px] h-4">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>  
  `;
}

export function init() {
  const departmentItems = document.querySelectorAll(".department-item");
  const imgEl = document.getElementById("dept-image");
  const descEl = document.getElementById("dept-description");
  const linkEl = document.getElementById("dept-link");

  const departments = {
    architecture: {
      image: "/assets/images/architecture-img.svg",
      alt: "Architecture students",
      description: `Architects and landscape architects play a critical role in engaging with some of the world's most complex issues—from climate change to urban density, social and economic diversity to cultural preservation. The School of Architecture's undergraduate and graduate programs aim to furnish each student with a deep understanding of the field's fundamentals while developing a holistic perspective of architecture's vast scope and impact. Our graduates leave ready to tackle the evolving challenges of society and our physical environment.`,
      link: "https://camd.northeastern.edu/architecture",
    },
    art: {
      image: "/assets/images/art-design-img.svg",
      alt: "Art and design students",
      description: `Students learn to chart their own course into a dynamic and multifaceted professional landscape through expressive engagement with the broader world and the exercise of personal agency and vision through their chosen medium. We provide students with both an abiding conceptual framework and a mastery of practical skills in design and media art through engagement with emerging techniques and technologies and a commitment to the highest level of craft.`,
      link: "https://camd.northeastern.edu/art-design/",
    },
    comm: {
      image: "/assets/images/communication-img.svg",
      alt: "Communication studies students",
      description: `The Communication Studies Department's dynamic undergraduate curriculum and flexible requirements allow students to forge a distinctive niche within the vast and varied communication landscape, while our diverse professional network affords a wide spectrum of co-op and experiential learning opportunities, in Boston and around the world—enabling students to gain practical experience and build connections that will form the cornerstones of a successful career after graduation.`,
      link: "https://camd.northeastern.edu/communication-studies/",
    },
    journalism: {
      image: "/assets/images/journalism-img.svg",
      alt: "Journalism students",
      description: `The School of Journalism at CAMD combines traditional journalistic values—asking fundamental questions, seeking truths, holding institutions accountable—with new media techniques of digital, video, and data storytelling. All to create journalists and public relations professionals ready to engage audiences, spur action, and change the world.`,
      link: "https://camd.northeastern.edu/journalism/",
    },
    music: {
      image: "/assets/images/music-img.svg",
      alt: "Music students",
      description: `The Department of Music at CAMD inspires creative growth through intellectual discovery and innovation, transdisciplinary education and collaboration, and academic and experiential learning programs that prepare students for the music profession—and the world—that they will encounter after graduation.`,
      link: "https://camd.northeastern.edu/music/",
    },
    theatre: {
      image: "/assets/images/theatre-img.svg",
      alt: "Theatre students",
      description: `The Department of Theatre at Northeastern University is decidedly different than most university theatre programs: we offer a unique alternative to the traditional choices of either a conservatory (non-academic/talent-based) or a liberal arts program (without career preparation). As a hub for Creative Practice Research, housed within the College of Arts, Media & Design (CAMD), we develop and hone the basic human literacies of creativity, collaboration, and communication through critical creative practice.`,
      link: "https://camd.northeastern.edu/theatre/",
    },
  };

    // Mobile carousel
    const mobileCarouselInner = document.querySelector("#mobile-carousel .mobile-carousel-inner");
    if (mobileCarouselInner) {
      Object.keys(departments).forEach((key) => {
        const d = departments[key];
        const navItem = document.querySelector(`.department-item[data-dept='${key}']`);
        const rawTitle = navItem ? navItem.textContent.trim() : key.toUpperCase();
        const title = rawTitle
          .toLowerCase()
          .split(' ')
          .map((w) => (w.length ? w.charAt(0).toUpperCase() + w.slice(1) : w))
          .join(' ');

        const card = document.createElement("article");
        card.className = "mobile-card snap-start flex-shrink-0 mr-4";
        card.dataset.dept = key;
        card.style.width = "294px";
        card.style.height = "495px";
        card.style.background = "#67192F";
        card.style.color = "#ffffff";
        card.style.borderRadius = "0px";
        card.style.padding = "16px";
        card.style.boxSizing = "border-box";

        card.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:flex-start;gap:0;height:100%;">
              <div style="width:270px;height:172px;overflow:hidden;border-radius:4px;flex-shrink:0;margin:0;padding:0;align-self:center;">
                <img src="${d.image}" alt="${d.alt || ''}" style="width:100%;height:100%;object-fit:cover;display:block;margin:0;">
              </div>
              <h3 style="font-size:32px;margin:0;text-align:left;color:#ffffff;font-weight:500;">${title}</h3>
              <p style="font-size:12px;color:#ffffff;text-align:left;overflow:auto;flex:1;margin:0 0 12px 0;line-height:1.45;font-weight:300;padding-top:0;">${d.description}</p>
            </div>
          `;
        mobileCarouselInner.appendChild(card);
      });

      const mobileCards = mobileCarouselInner.querySelectorAll(".mobile-card");
      mobileCards.forEach((c) => {
        c.addEventListener("click", (ev) => {
          const key = c.dataset.dept;
          const navEl = document.querySelector(`.department-item[data-dept='${key}']`);
          setActive(key, navEl);
          if (!ev.defaultPrevented) c.scrollIntoView({ behavior: "smooth", inline: "center" });
        });
      });
    }

  function setActive(deptKey, clickedEl) {
    // set active buttons
    departmentItems.forEach((i) => {
      i.classList.remove(
        "bg-camd-maroon",
        "text-white",
        "hover:bg-camd-maroon-hover",
      );
      i.classList.add("bg-gray-100", "text-black", "hover:bg-gray-200");
    });
    if (clickedEl) {
      clickedEl.classList.remove(
        "bg-gray-100",
        "text-black",
        "hover:bg-gray-200",
      );
      clickedEl.classList.add(
        "bg-camd-maroon",
        "text-white",
        "hover:bg-camd-maroon-hover",
      );
    }

    // this is data
    const data = departments[deptKey] || departments.architecture;

    // set image
    if (imgEl) {
      imgEl.src = data.image;
      imgEl.alt = data.alt || "";
    }

    // set description
    if (descEl) descEl.textContent = data.description;

    // set link
    if (linkEl) linkEl.href = data.link || "#";
  }

  departmentItems.forEach((item) => {
    item.addEventListener("click", () => {
      const key =
        item.dataset.dept ||
        item.textContent.trim().toLowerCase().split(" ")[0];
      setActive(key, item);
    });
  });

  const first = departmentItems[0];
  if (first) setActive(first.dataset.dept || "architecture", first);
}
