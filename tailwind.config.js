/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
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
    },
  },
  plugins: [],
}

