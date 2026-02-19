export function render() {
  return `
    <section id="departments" class="section-full font-akshar bg-gray-100 py-10 px-5">
        <div class="max-w-[1724px] mx-auto">
            <!-- Header -->
            <h1 class="text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] font-medium leading-tight mb-10 pl-12">
                OUR DEPARTMENTS
            </h1>
            
            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 items-start">
                
                <!-- Department Navigation -->
                <nav class="flex flex-col gap-2">
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
                <div class="flex flex-col gap-8">
                    
                    <!-- Description and Image Wrapper -->
                    <div class="prose max-w-none">
                        <!-- Image -->
                        <div class="mb-6 xl:ml-6 xl:float-right xl:w-[432px] pr-12">
                            <div id="dept-image-wrap" class="w-[432px] h-[492px] overflow-hidden">
                                <img id="dept-image" src="/assets/images/departments-img.svg" 
                                    alt="" 
                                    class="w-full h-full object-contain">
                            </div>
                        </div>

                            <!-- Description -->
                            <div id="dept-description" class="text-lg sm:text-2xl lg:text-3xl xl:text-[40px] font-light leading-[1.75] text-black"></div>
                            <div class="clear-both"></div>

                            <!-- Learn More Button -->
                            <div class="flex justify-center md:justify-end mt-8 pr-12">
                                <a id="dept-link" href="https://camd.northeastern.edu/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-7 py-2 bg-camd-maroon text-white text-2xl font-normal rounded-sm cursor-pointer transition-colors hover:bg-camd-maroon-hover">
                                    LEARN MORE
                                    <img src="/assets/images/right-arrow.svg" 
                                        alt="" 
                                        class="w-[10px] h-4">
                                </a>
                            </div>
                        </div>
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

  function setActive(deptKey, clickedEl) {
    // update active buttons
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

    const data = departments[deptKey] || departments.architecture;

    // update image
    if (imgEl) {
      imgEl.src = data.image;
      imgEl.alt = data.alt || "";
    }

    // update description
    if (descEl) descEl.textContent = data.description;

    // update link
    if (linkEl) linkEl.href = data.link || "#";
  }

  // listeners
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
