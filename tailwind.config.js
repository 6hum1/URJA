/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'linear-gradient(rgba(4, 9, 30, 0.6), rgba(4, 9, 30, 0.6)), url("/dist/assets/IMG_9216.jpg")'
      }
    },
  },
  plugins: [],
}

