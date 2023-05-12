/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {

        padding: {
          DEFAULT: '1rem',
          md: '1rem',
          lg: '2rem',
          xl: '5rem',

        },
      },
      colors: {
        primary: "#777373",
        secondary: "#4d12ae"
      }
    },
  },
  plugins: [],
}