/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'black-100': '#2B2C35',
        'primary-blue': {
          DEFAULT: '#2B59FF',
          100: '#F5F8FF',
        },
        'secondary-orange': '#F79761',
        'light-white': {
          DEFAULT: 'rgba(59,60,152,0.83)',
          100: 'rgba(59,60,152,0.02)',
        },
        grey: '#747ABB',
      },
    },
  },
  plugins: [],
}
