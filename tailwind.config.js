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
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.2)',
      }
    },
  },
  plugins: [],
}