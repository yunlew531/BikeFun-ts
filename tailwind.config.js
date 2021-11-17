module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white': {
          100: '#fff'
        },
        'green': {
          100: '#A3C896'
        },
        'yellow': {
          100: '#E1AB43'
        },
        'dark': {
          100: '#5C5C5C'
        },
        'orange': {
          100: '#F15C2D'
        },
        'gray': {
          100: '#DADADA',
          200: '#C4C4C4'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
