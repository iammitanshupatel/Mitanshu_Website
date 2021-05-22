/* eslint-disable */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
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
        backgroundColor: {
          skin: {
            fill: 'var(--color-fill)',
            'button-accent': 'var(--color-button-accent)',
            'button-accent-hover': 'var(--color-button-accent-hover)',
            'button-service': 'var(--color-button-service)',
            'button-disable': ({ opacityValue }) => {
              if (opacityValue == undefined) {
                return `rgba(var(--color-button-disable), ${opacityValue})`;
              }
              return `rgba(var(--color-button-disable))`;
            },
            // 'color-bg-fill': 'var(--bg-color-bg-fill)',
          },
        },
        textColor: {
          skin: {
            base: 'var(--color-text-base)',
            dull: 'var(--color-text-dull)',
            inverted: 'var(--color-text-inverted)',
            'inverted-dull': 'var(--color-text-inverted-dull)',
            copyright: 'var(--color-text-copyright)',
            date: 'var(--color-text-date)',
            navbar: 'var(--color-text-navbar)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp')],
};
