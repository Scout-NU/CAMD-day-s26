export function render() {
  return `
    <!-- <section id="departments" class="section-full flex items-center justify-center">
      <h1 class="text-4xl text-camd-maroon">Departments Section</h1>
      <div style="width: 100%; height: 100%; text-align: right; justify-content: center; display: flex; flex-direction: column; color: black; font-size: 110px; font-family: Akshar; font-weight: 500; line-height: 120px; word-wrap: break-word">OUR DEPARTMENTS</div>
    </section> -->

    
<body class="font-akshar bg-gray-100 py-10 px-5">
    <div class="max-w-[1724px] mx-auto">
        <!-- Header -->
        <h1 class="text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] font-medium leading-tight mb-10">
            OUR DEPARTMENTS
        </h1>
        
        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-[minmax(300px,668px)_1fr] gap-10 items-start">
            
            <!-- Department Navigation -->
            <nav class="flex flex-col gap-2">
                <div class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-burgundy text-white cursor-pointer transition-colors hover:bg-burgundy-hover">
                    ARCHITECTURE
                </div>
                <div class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-gray-100 text-black cursor-pointer transition-colors hover:bg-gray-200">
                    ART + DESIGN
                </div>
                <div class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-gray-100 text-black cursor-pointer transition-colors hover:bg-gray-200">
                    COMMUNICATION STUDIES
                </div>
                <div class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-gray-100 text-black cursor-pointer transition-colors hover:bg-gray-200">
                    JOURNALISM
                </div>
                <div class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-gray-100 text-black cursor-pointer transition-colors hover:bg-gray-200">
                    MUSIC
                </div>
                <div class="department-item px-12 sm:px-16 lg:px-[72px] py-6 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-medium leading-tight bg-gray-100 text-black cursor-pointer transition-colors hover:bg-gray-200">
                    THEATRE
                </div>
            </nav>

            <!-- Content Area -->
            <div class="flex flex-col gap-8">
                
                <!-- Description and Image Wrapper -->
                <div class="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-8 items-start">
                    
                    <!-- Description -->
                    <div class="text-lg sm:text-2xl lg:text-3xl xl:text-[40px] font-light leading-[1.75] text-black">
                        Architects and landscape architects play a critical role in engaging with some of the world's most complex issues—from climate change to urban density, social and economic diversity to cultural preservation. The School of Architecture's undergraduate and graduate programs aim to furnish each student with a deep understanding of the field's fundamentals while developing a holistic perspective of architecture's vast scope and impact. Our graduates leave ready to tackle the evolving challenges of society and our physical environment.
                    </div>
                    
                    <!-- Image Container -->
                    <div class="relative w-full max-w-[432px] mx-auto xl:mx-0 flex-shrink-0">
                        <!-- Background shape -->
                        <div class="w-full aspect-[426/363] bg-gray-300 rounded-[71px]"></div>
                        <!-- Image -->
                        <img src="https://placehold.co/432x494" 
                             alt="Architecture students" 
                             class="absolute top-[-30px] left-[10%] w-full h-auto aspect-[432/494] object-cover">
                    </div>
                </div>

                <!-- Learn More Button -->
                <div class="flex justify-end mt-5">
                    <button class="inline-flex items-center gap-3 px-7 py-2 bg-burgundy text-white text-2xl font-normal rounded-sm cursor-pointer transition-colors hover:bg-burgundy-hover">
                        Learn more
                        <span class="w-[10px] h-4 bg-white arrow-shape"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</body>    
  `;
}

export function init() {
  // interactivity goes here
  const departmentItems = document.querySelectorAll('.department-item');
        
        departmentItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active classes from all items
                departmentItems.forEach(i => {
                    i.classList.remove('bg-camd-maroon', 'text-white', 'hover:bg-camd-maroon');
                    i.classList.add('bg-#F7F7F7', 'text-black', 'hover:bg-#F7F7F7');
                });
                
                // Add active classes to clicked item
                this.classList.remove('bg-#F7F7F7', 'text-black', 'hover:bg-#F7F7F7');
                this.classList.add('bg-camd-maroon', 'text-white', 'hover:bg-camd-maroon');
                
                // Here add logic to load different content for each department
            });
        });
}
