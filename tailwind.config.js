const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        primaryDark: colors.amber,
        secondaryLight: colors.orange,
        backgroundLight: colors.slate[200],
        backgroundDark: colors.slate[600],
        textLight: colors.slate[600],
        textDark: colors.white,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
