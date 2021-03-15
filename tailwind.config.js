module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      rale: ['Raleway'],
      sans: ['Raleway', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        danger: '#ac0d0d',
        info: {
          100: '#94ebcd',
          200: '#6ddccf'
        },
        abiezer: {
          100: '#e40017',
          200: '#fce38a'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
