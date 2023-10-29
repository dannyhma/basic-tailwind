/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      spacing: {
        13: '3.25rem',
      },
      fontFamily: {
        nunito: ['Nunito'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'dance': 'dance 5s ease-in-out infinite'
      },
      keyframes:{
        dance: {
          '0%, 100%': {
            transform: 'rotate(-15deg)',
          },
          '50%':{
            transform: 'rotate(15deg)',
          },
        },
      },
    },
  },
  plugins: [],
}

