/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        akshar: ['Akshar', 'sans-serif'],
        realhead: ['"Real Head Pro"', 'sans-serif'],
      },
      colors: {
        camd: {
          black:      '#000000',
          white:      '#FFFFFF',
          gray:       '#F6F6F6',    // page bg
          'gray-mid': '#D9D9D9',    // placeholder cards
          'gray-dk':  '#A0A0A0',    // scrollbar
          'gray-lt':  '#BBBBBB',
          maroon:     '#67192F',    // primary brand (red-900 in Figma)
          red:        '#C9102E',    // accent red
          orange:     '#DB5322',    // Architecture schedule color
          cyan:       '#0097C2',    // Art+Design schedule color
          'cyan-lt':  '#53D1F5',    // checkbox highlight
          purple:     '#992EFC',    // Journalism schedule color
          green:      '#548C2F',    // Theatre schedule color
          pink:       '#CC0068',    // Music schedule color
          yellow:     '#F9CB40',    // Comm Studies schedule color
          'yellow-dk':'#E8D841',
          walnut:     '#3D2800',    // Deep Walnut — schedule text
          rose:       '#C9102E',    // "2026" text color (rose-700)
        },
      },
    },
  },
  plugins: [],
};
