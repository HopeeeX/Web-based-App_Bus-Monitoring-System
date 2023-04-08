/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: '642F84',
        secondary: 'A7A9AC',
        tertiary: 'E9E9E9',
        highlight: '#c3aecf',
      }
    },
      gradientColorStops: {
        gradient1: {
          'start': '642F84',
          'end': '#9571ab'
        }
      }
  },
  plugins: [],
}

