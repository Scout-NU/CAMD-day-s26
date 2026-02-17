export function render() {
  return `
    <section id="footer">
    <div class="h-[30vh] w-full bg-black grid grid-cols-[4fr_6fr] text-white font-realhead">
      
      <!-- Address and Brand -->

      <div class="col-start-1 col-end-2 size-full flex flex-col items-start pl-8 py-6 text-xl">
        <span>Ryder Hall</span>
        
        <!-- Address -->

        <div class="flex flex-col leading-tight mt-8">
          <span>11 Leon St, Boston, MA 02115</span>
          <span>United States</span>
        </div>

        <!-- Northeastern Brand Logo -->
        <img class="mt-auto h-12 w-max" style="filter: brightness(0) invert(1);" src="https://d3tvevvhad9ws1.cloudfront.net/wp-content/uploads/2023/01/Logo.png" alt="CAMD Brand Logo">
      </div>


      <!-- Email Form and Socials -->

      <div class="col-start-2 col-end-3 flex flex-col items-start size-full pl-8 pr-16 py-6 text-2xl">
        <span class="mt-4">Sign up for event updates, speaker news, and more from CAMD:</span>

        <!-- Email Form -->

        <form class="relative w-full mt-auto flex flex-row justify-between">
          <input type="email" placeholder="Your Email" class="w-full bg-transparent focus:outline-none">
          
          <!-- TODO: Animate arrow on hover with framer motion -->

          <button type="submit" class="flex flex-row gap-4 items-center text-white px-4 py-2 hover:bg-white/20 transition-colors duration-150 ease-out">
            <span>Submit</span>
            <svg height="24px" width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9"></path> </g></svg>
          </button>
          <div class="absolute w-full h-[1px] bottom-0 bg-white"></div>
        </form>

        <!-- Social Media Icons -->
        <div class="flex gap-8 mt-8">
          <a href="https://www.linkedin.com/company/college-of-arts-media-and-design-at-northeastern-university/" target="_blank" rel="noopener noreferrer">
            <svg height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.903 21.903" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#FFFFFF;" d="M2.67,1.211c0.682,0,1.216,0.215,1.604,0.643S4.87,2.822,4.898,3.469 c0,0.639-0.218,1.178-0.657,1.616C3.802,5.522,3.202,5.741,2.443,5.741H2.416c-0.741,0-1.328-0.219-1.765-0.656 C0.219,4.647,0,4.108,0,3.469c0-0.657,0.238-1.197,0.718-1.622C1.198,1.423,1.85,1.211,2.67,1.211z M0.287,7.535H4.97v13.156H0.287 V7.535z M21.903,13.148v7.543h-4.682v-7.036c0-0.895-0.184-1.612-0.55-2.158c-0.364-0.541-0.973-0.812-1.833-0.812 c-0.655,0-1.181,0.166-1.573,0.5c-0.393,0.332-0.678,0.699-0.85,1.102c-0.056,0.146-0.091,0.307-0.11,0.486 c-0.018,0.176-0.026,0.367-0.026,0.568v7.351H7.568c0.02-2.226,0.031-4.268,0.031-6.12v-2.339v-2.125 c0-0.647-0.007-1.199-0.018-1.657C7.575,7.997,7.568,7.69,7.568,7.535h4.711v1.863l-0.026,0.054h0.026V9.398 c0.146-0.229,0.333-0.468,0.561-0.719c0.231-0.25,0.507-0.484,0.843-0.7c0.333-0.214,0.734-0.39,1.204-0.533 c0.473-0.141,1.011-0.211,1.624-0.211c0.762,0,1.474,0.116,2.138,0.349c0.662,0.233,1.231,0.598,1.715,1.096 c0.481,0.495,0.858,1.111,1.132,1.847C21.769,11.261,21.903,12.135,21.903,13.148z"></path> </g> </g></svg>
          </a>
          <a href="https://www.instagram.com/northeasterncamd/?hl=en" target="_blank" rel="noopener noreferrer">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#FFFFFF"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#FFFFFF"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#FFFFFF"></path> </g></svg>
          </a>
          <a href="https://x.com/NU_CAMD" target="_blank" rel="noopener noreferrer">
            <svg height="24px" width="24px" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path fill="#FFFFFF" d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></g></svg>
          </a>
        </div>
      
      </div>
    </div>
    </section>
  `;
}

export function init() {
  // interactivity goes here
}
