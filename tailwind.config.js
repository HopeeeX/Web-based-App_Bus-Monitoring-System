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
      width : {
        "map" : "84vw"
      },
      colors:{
        primary: '#642F84',
        secondary: '#A7A9AC',
        tertiary: '#E9E9E9',
        highlight: '#D69CF9',
        sidebar: '#784a94',
        fontColor: '#666666',
        tableFontColor: '#828486',
        inspectionTitle: '#504848',
        inspectionList: '#797878',
        navbarColorText: '#555555',
        passengerBusLocation: '#EFEFEF'
      },
      boxShadow: {
        'rating': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
     
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'worksans': ['Work Sans', 'sans-serif']
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