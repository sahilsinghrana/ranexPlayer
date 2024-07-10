import theme from "./src/utils/constants/theme";

// const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: theme,
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
};
