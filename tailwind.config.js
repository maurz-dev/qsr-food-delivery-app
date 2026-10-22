/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0e1015',
          800: '#171922',
          700: '#202430'
        }
      }
    },
  },
  plugins: [],
}
