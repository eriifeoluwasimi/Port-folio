/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      spacing: {
        big: "48rem",
      },
    },
    fontFamily: {
      Nunito: ["Nunito", "serif"],
    },
  },
  plugins: [],
};
