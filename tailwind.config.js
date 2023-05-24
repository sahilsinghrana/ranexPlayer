import colorScale from './src/utils/constants/colors';

// const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: colorScale,
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
};
