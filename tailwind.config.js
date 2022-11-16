/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        '3xl': '0 3px 10px rgb(255 255 255 / 0.7)'
      }
    },
  },
  plugins: [],
}
