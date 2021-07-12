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
    screens: {
      xs: '320px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Raleway: ['Raleway'],
        opensans: ['Open Sans'],
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
        darkGrayishCyan:'#748182'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp')],
};
