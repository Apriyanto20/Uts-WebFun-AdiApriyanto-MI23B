/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'cv.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#22d3ee',
        dark: '#0f172a'
      }
    },
    screens: {
      '2xl1': '1320px' 
    }
  },
  plugins: [],
}

