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
        astraGreen: {
          100: '#29D9A5',
          200: '#22bd8f',
          300: '#167a5d',
        },
        astraGray: {
          100: '#F5F5F5'
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
