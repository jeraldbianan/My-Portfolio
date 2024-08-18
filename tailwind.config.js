/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/quasar/src/**/*.{js,ts,vue}',
    './node_modules/quasar/src/**/*.sass',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
