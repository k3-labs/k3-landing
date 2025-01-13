/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    darkMode: 'class',
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        code: ['Menlo', ...defaultTheme.fontFamily.mono]
      },
      maxWidth: {
        '6xl': '74rem'
      }
    },
    screens: {
      xs: '400px',
      ...defaultTheme.screens
    },

    colors: {
      ...require('tailwindcss/colors'),
      transparent: 'transparent',
      current: 'currentColor',
      grayText: '#454545',
      blackLight: '#1A1A1A',
      blue: '#0070F3',
      blueLight: '#4886D0',
      blueGray: '#A2B4C9',
      darkGray: '#434343',
      gray: '#A1A1A1',
      green: '#47DDC4',
      greenDark: '#008375',
      greenLight: '#CCF9F1',
      navy: '#3D52D5',
      pomegranate: '#ED3A2C',
      purple: '#9341D5',
      red: '#E7484E',
      rose: '#FF0080',
      whiteStroke: '#F5F5F5',
      // white: '#FBFFF1',
      yellow: '#FE9402'
    }
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/typography')]
}
