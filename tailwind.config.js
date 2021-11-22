module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white': {
          100: '#fff',
          200: '#fafafa'
        },
        'green': {
          100: '#A3C896'
        },
        'yellow': {
          100: '#E1AB43',
          200: '#FFF4DE'
        },
        'dark': {
          100: '#000',
          200: '#5C5C5C',
          300: '#7E7E7E'
        },
        'orange': {
          100: '#F15C2D'
        },
        'gray': {
          100: '#DADADA',
          200: '#C4C4C4',
          300: '#E5E5E5',
          400: '#B6B6B6',
          500: '#E0E0E0',
          600: '#aeb0a6'
        },
        'purple': {
          100: '#628EE2'
        }
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      opacity: ['active']
    },
  },
  plugins: [],
}
