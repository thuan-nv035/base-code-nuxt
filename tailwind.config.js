/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: {
        sm: '1rem',
        xl: '19.5rem',
      },
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1280px',
      xl: '1920px',
    },
  },
  plugins: [],
}