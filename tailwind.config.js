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
      },
      animation:{
        blink: 'blink 0.7 s step-end infinite',
      },
      keyframes:{
        blink:{
          '50%': {opacity: 0}
        }
      },
    },
  },
  plugins: [],
}

