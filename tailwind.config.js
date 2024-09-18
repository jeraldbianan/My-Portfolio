/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/quasar/src/**/*.{js,ts,vue}',
    './node_modules/quasar/src/**/*.sass',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        tablet: { max: '1024px' },
        mobile: { max: '760px' },
      },
      colors: {
        'main-blue': '#0BBEF2',
        'dark-blue': '#324162',
        'main-grey': '#697694',
        'dark-grey': '#3C4862',
        'main-yellow': '#FFB200',
        'main-white': '#F5F7FA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      maxWidth: {
        container: '1160px',
      },
      boxShadow: {
        bigShadow: '0 15px 35px 0 rgba(39, 44, 47, 0.1)',
      },
    },
  },
  plugins: [],
};
