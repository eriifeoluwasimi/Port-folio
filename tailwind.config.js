/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        big: "48rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      Nunito: ["Nunito", "serif"],
    },
  },
  plugins: [],
};
