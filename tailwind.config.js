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
        "lotrdle": "url('/bg.webp')",
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee"],
  },
}