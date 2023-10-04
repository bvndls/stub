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
      'dark_bgcolor': '#010d13',
      'dark_txtcolor': '#ecf8fe',
      'dark_primary': '#2fb2f4',
      'dark_secondary': '#021d2c',
      'dark_accent': '#99dafa'
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