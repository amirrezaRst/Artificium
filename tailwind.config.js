/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: ".7rem",
          sm: ".7rem",
          md: ".85rem",
          lg: ".95rem",
          xl: "1.1rem",
          "2xl": "1.7rem"
        },
        center: true,
      },
      screens: {
        '3xl': '2000px'
      }
    },

  },
  plugins: [],
}