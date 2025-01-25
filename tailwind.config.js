/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
