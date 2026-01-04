/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        "gold-leaf": "#D4AF37",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
}