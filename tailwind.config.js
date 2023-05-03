/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm' : '360px',
      'md' : '768px',
      'lg' : '960px',
      'xl' : '1440px',
    },
    extend: {
      colors:{
        primary: '#642F84',
        secondary: '#A7A9AC',
        tertiary: '#E9E9E9',
        highlight: '#D69CF9',
        sidebar: '#784a94',
        fontColor: '#666666',
        tableFontColor: '#828486',
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
      gradientColorStops: {
        gradient1: {
          'start': '#642F84',
          'end': '#9571ab'
        },
        driverGradient:{
          'start': '#E6E6E6',
          'end': '#642F84B0'
        }
      }
  },
  plugins: [],
}