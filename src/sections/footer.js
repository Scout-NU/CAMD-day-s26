export function render() {
  return `
    <!-- CAMD Gray Footer -->
    <footer style="background-color: #e8e8e8; font-family: Lato, sans-serif; font-size: 16px; color: #1f1f1f; width: 100%; box-sizing: border-box;">
      <div style="display: flex; flex-direction: row; padding-left: 32px; padding-top: 28px;">

        <!-- Left border line -->
        <div style="width: 1px; background-color: #1f1f1f; flex-shrink: 0;"></div>

        <!-- Left column: logo + socials -->
        <div style="width: 260px; flex-shrink: 0; padding: 8px 28px; display: flex; flex-direction: column; justify-content: space-between;">
          <img
            src="https://d3tvevvhad9ws1.cloudfront.net/wp-content/uploads/2023/01/Logo.png"
            alt="Northeastern University College of Arts, Media and Design"
            style="width: 220px; height: auto; display: block;"
          >

          <!-- Social icons — aligned to bottom of nav (careers row) -->
          <div style="display: flex; gap: 16px; align-items: center; padding-bottom: 8px;">
            <a href="https://x.com/NU_CAMD" target="_blank" rel="noopener noreferrer" aria-label="CAMD on X" style="color: #1f1f1f;">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"/></svg>
            </a>
            <a href="https://www.instagram.com/northeasterncamd/" target="_blank" rel="noopener noreferrer" aria-label="CAMD on Instagram" style="color: #1f1f1f;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/college-of-arts-media-and-design-at-northeastern-university/" target="_blank" rel="noopener noreferrer" aria-label="CAMD on LinkedIn" style="color: #1f1f1f;">
              <svg width="20" height="20" viewBox="0 0 21.903 21.903" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2.67,1.211c0.682,0,1.216,0.215,1.604,0.643S4.87,2.822,4.898,3.469c0,0.639-0.218,1.178-0.657,1.616C3.802,5.522,3.202,5.741,2.443,5.741H2.416c-0.741,0-1.328-0.219-1.765-0.656C0.219,4.647,0,4.108,0,3.469c0-0.657,0.238-1.197,0.718-1.622C1.198,1.423,1.85,1.211,2.67,1.211zM0.287,7.535H4.97v13.156H0.287V7.535zM21.903,13.148v7.543h-4.682v-7.036c0-0.895-0.184-1.612-0.55-2.158c-0.364-0.541-0.973-0.812-1.833-0.812c-0.655,0-1.181,0.166-1.573,0.5c-0.393,0.332-0.678,0.699-0.85,1.102c-0.056,0.146-0.091,0.307-0.11,0.486c-0.018,0.176-0.026,0.367-0.026,0.568v7.351H7.568c0.02-2.226,0.031-4.268,0.031-6.12v-2.339v-2.125c0-0.647-0.007-1.199-0.018-1.657C7.575,7.997,7.568,7.69,7.568,7.535h4.711v1.863l-0.026,0.054h0.026V9.398c0.146-0.229,0.333-0.468,0.561-0.719c0.231-0.25,0.507-0.484,0.843-0.7c0.333-0.214,0.734-0.39,1.204-0.533c0.473-0.141,1.011-0.211,1.624-0.211c0.762,0,1.474,0.116,2.138,0.349c0.662,0.233,1.231,0.598,1.715,1.096c0.481,0.495,0.858,1.111,1.132,1.847C21.769,11.261,21.903,12.135,21.903,13.148z"/></svg>
            </a>
            <a href="https://www.facebook.com/NortheasternCAMD" target="_blank" rel="noopener noreferrer" aria-label="CAMD on Facebook" style="color: #1f1f1f;">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.514c-1.491 0-1.956.93-1.956 1.883v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCKCnTbOAKlSbGDCdS2Ol7Ag" target="_blank" rel="noopener noreferrer" aria-label="CAMD on YouTube" style="color: #1f1f1f;">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <!-- Center divider line -->
        <div style="width: 1px; background-color: #1f1f1f; flex-shrink: 0;"></div>

        <!-- Right column: nav links in two columns -->
        <div style="flex: 1; padding: 8px 60px; display: grid; grid-template-columns: 1fr 1fr; align-content: start;">

          <!-- Left nav column -->
          <div>
            <a href="https://camd.northeastern.edu/contact/" style="display: block; font-size: 22px; font-family: Lato, sans-serif; color: #1f1f1f; text-decoration: none; padding: 8px 0;">Contact</a>
            <a href="https://camd.northeastern.edu/visit/" style="display: block; font-size: 22px; font-family: Lato, sans-serif; color: #1f1f1f; text-decoration: none; padding: 8px 0;">Visit / Map and Directions</a>
            <a href="https://camd.northeastern.edu/people/" style="display: block; font-size: 22px; font-family: Lato, sans-serif; color: #1f1f1f; text-decoration: none; padding: 8px 0;">Our People</a>
            <a href="https://camd.northeastern.edu/about/" style="display: block; font-size: 22px; font-family: Lato, sans-serif; color: #1f1f1f; text-decoration: none; padding: 8px 0;">About CAMD</a>
            <a href="https://camd.northeastern.edu/careers/" style="display: block; font-size: 22px; font-family: Lato, sans-serif; color: #1f1f1f; text-decoration: none; padding: 8px 0;">Careers</a>
          </div>

          <!-- Right nav column -->
          <div style="padding-left: 60px;">
            <a href="https://camd.northeastern.edu/news/" style="display: block; font-size: 22px; font-family: Lato, sans-serif; color: #1f1f1f; text-decoration: none; padding: 8px 0;">News</a>
            <a href="https://camd.northeastern.edu/events/" style="display: block; font-size: 22px; font-family: Lato, sans-serif; color: #1f1f1f; text-decoration: none; padding: 8px 0;">Events</a>
            <a href="https://registrar.northeastern.edu/group/calendar/" style="display: block; font-size: 22px; font-family: Lato, sans-serif; color: #1f1f1f; text-decoration: none; padding: 8px 0;">Academic Calendar</a>
            <a href="http://catalog.northeastern.edu/" style="display: block; font-size: 22px; font-family: Lato, sans-serif; color: #1f1f1f; text-decoration: none; padding: 8px 0;">Catalog</a>
            <a href="https://www.northeastern.edu/privacy-information/" style="display: block; font-size: 22px; font-family: Lato, sans-serif; color: #1f1f1f; text-decoration: none; padding: 8px 0;">Privacy Information</a>
          </div>

        </div>

      </div>
    </footer>
  `;
}

export function init() {
  // No interactive behaviour needed for this footer
}