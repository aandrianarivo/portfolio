/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        assisant: ['Assistant', 'sans-serif'],
        eu: ['Eu', 'sans-serif'],
        doto: ['Doto', 'sans-serif'],
        anton: ['Anton', 'sans-serif']
      },
      animation: {
        blink: 'blink 0.7s step-end infinite',
        marquee: 'marquee 7s linear infinite',
        leftright: 'leftright 7s linear infinite',
        leftrightContinuous: "leftrightContinuous 5s linear infinite",
        blob: 'blob 10s infinite'
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0 }
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        leftright: {
          '0%': { transform: 'translateX(-100%)' },  // Commence à gauche
          '100%': { transform: 'translateX(100%)' }, // Va vers la droite
        },
        blob: {
          '0%': { transform: ' translate(0px,0px) scale(1)' },
          '33%': { transform: ' translate(30px,-50px) scale(1.1)' },
          '66%': { transform: ' translate(-20px,20px) scale(0.9)' },
          '100%': { transform: 'translate(0px,0px) scale(1)' },
        }
      },
    },
  },
  plugins: [],
}
