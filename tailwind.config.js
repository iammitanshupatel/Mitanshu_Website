/* eslint-disable */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  important: true,
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontSize: {
      '10xl': ['160px', '1'],
      ...defaultTheme.fontSize,
    },
    borderRadius: {
      fiftyPercent: '50%',
      ...defaultTheme.borderRadius,
    },
    extend: {
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
      margin: {
        tenPercent: '10%',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Sofiapro: ['sofia-pro', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray: '#b9b9b9',
        darkGray: '#696969',
        darkerGray: '#484848',
        veryDarkGray: '#1f1f1f',
        white: '#fff',
        darkWhite: '#ffffffbd',
        brightBlue: '#2f89fc',
        veryDarkBlue: '#0b0b13',
        lightBlack: '#101010',
        darkGrayishCyan: '#748182',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp')],
};
