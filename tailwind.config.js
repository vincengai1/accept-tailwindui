const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
        san: ['Noto Sans, sans-serif !important'],
        serif: ['Noto Serif !important']
      },
      colors: {
        astraGray: {
          400: "#e9eef0",
          100: "#c0ced1",
          200: "#949D9F",
          300: "#565d5e"
        },
        astraPink: {
          100: "#db8ab2",
          200: "#DA5697",
          300: "#d9006b",
        },
        astraGreen: {
          100: '#29D9A5',
          200: '#22bd8f',
          300: '#167a5d',
        },
        fontGray: {
          100: '#244150'
        },
        darkGray: {
          100: '#244150'
        },
        lightGray: {
          100: "#F5F5F5"
        }
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
      },
      fontSize: {
        sm: ['16px !important', '24px'],
        md: ['24px !important', '28.8px']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
