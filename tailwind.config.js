/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#53B175',
        secondary: '#f24444',
        backdrop: 'rgba(0,0,0,0.5)',
      },
      fontFamily: {},
      borderRadius: {},
    },
  },
  plugins: [],
};
