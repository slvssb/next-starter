/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires */

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        overlay: 'rgba(144,157,171,0.12)',
      },
      backgroundColor: {
        light: colors.gray['50'],
        dim: '#22272e',
        card: { DEFAULT: colors.white, dim: '#2d333b' },
      },
      borderColor: {
        muted: '#373e47',
      },
      textColor: {
        primary: { DEFAULT: '#24292f', dark: '#adbac7' },
        muted: { DEFAULT: '#57606a', dark: '#768390' },
        link: { DEFAULT: '#0969da', dark: '#539bf5' },
      },
      minHeight: {
        modal: 'calc(100vh - 160px)',
      },
    },
  },
  plugins: [],
}
