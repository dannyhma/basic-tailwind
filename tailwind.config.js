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
        }
      },
      backgroundImage: {
        'f1': "url('./public/img/f1.jpeg')",
        'f2': "url('./public/img/f2.jpeg')",
        'f3': "url('./public/img/f3.jpeg')",
        'f4': "url('./public/img/f4.jpeg')",
        'f5': "url('./public/img/f5.jpeg')",
        'f6': "url('./public/img/f6.jpeg')",
        'f7': "url('./public/img/f7.jpeg')",
        'f8': "url('./public/img/f8.jpeg')",
        'f9': "url('./public/img/f9.jpeg')",
        'f10': "url('./public/img/f10.jpeg')",
        'f11': "url('./public/img/f11.jpeg')",
      }
    },
  },
  plugins: [],
}

