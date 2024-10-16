/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include TypeScript files
  ],
  theme: {
    extend: {
      fontFamily: {
        'copperplate': ['Copperplate Gothic', 'sans-serif'],
        'seasons': ['The Seasons', 'sans-serif'],
        'garet': ['Garet', 'sans-serif'],
      },
      colors: {
        'reviot-blue': ' #0c2b40',
        'reviot-cyan': '#0FB8CE',
      },
    },
  },
  plugins: [],
}