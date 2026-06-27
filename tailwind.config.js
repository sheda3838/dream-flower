/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#365C49",
        dark: "#244033",
        accent: "#A6C48A",
        cream: "#F7F5EF",
        body: "#E8ECE9",
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
