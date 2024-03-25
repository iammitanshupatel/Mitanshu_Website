/* eslint-disable */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  content: [
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
      animation: {
        finger: 'finger 2s infinite',
        blinkingCursor: 'blinkingCursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite',
      },
      keyframes: {
        finger: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        },
        blinkingCursor: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
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
  plugins: [require('@tailwindcss/aspect-ratio')],
};
