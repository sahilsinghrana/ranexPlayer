const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        primaryDark: colors.amber,
        secondaryLight: colors.orange,
        backgroundLight: colors.slate[200],
        backgroundDark: '#1c212c',
        backgroundDarker: '#11151b',
        textLight: '#1c212c',
        textDark: colors.white,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
