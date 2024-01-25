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
      },
      colors: {
        primary: "#131619",
        secondary: "#0D0F10",
        special: "#B6F09C",
        "special-gray": "#9B9C9E",
        "special-gray-2": "#1A1D21",
        "special-gray-3": "#686B6E"
      },
      boxShadow: {
        "intro-green": "0px 0px 64px 0px rgba(182, 240, 156, 0.16)",
        "intro-blue": "0px 0px 64px 0px rgba(130, 219, 247, 0.16)",
        "intro-purple": "0px 0px 64px 0px rgba(189, 154, 248, 0.16)",
        "intro-orange": "0px 0px 64px 0px rgba(255, 209, 71, 0.16)",
      },
      borderRadius: {
        "custom": "0.7rem"
      },
      height: {
        "custom-lg": "calc(100vh - 220px)",
        "custom-sm": "calc(100vh - 270px)",
        "custom-mobile": "calc(100vh - 180px)"
      }
    },

  },
  plugins: [],
}