/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,html}"],
  theme: {
    colors: {
      'bgcolor': '#ecf8fe',
      'txtcolor': '#010d13',
      'primary': '#0b8fd0',
      'secondary': '#d5effd',
      'accent': '#054667',
    },
    extend: {
      fontFamily: {
        alexandria: ["alexandria", "sans-serif"],
        omotion: ["omotion", "sans"],
      }
    },
  },
  plugins: [],
}