/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEC533",
      },
    },
    keyframes: {
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-5%)',
          'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
  },
  plugins: [],
};
