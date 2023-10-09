/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
      borderRadius: {},
    },
  },
  plugins: [],
};
