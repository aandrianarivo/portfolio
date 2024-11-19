/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        assisant:['Assistant', 'sans-serif'],
        eu: ['Eu', 'sans-serif'],
        doto: ['Doto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

