/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        middleEarth: ["'Middle Earth'", "sans-serif"],
      },
      backgroundImage: {
        "lotrdle": "url('/bg.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee"],
  },
}