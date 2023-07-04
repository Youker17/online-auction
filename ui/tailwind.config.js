/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body:"#fffffe",
        headline:"#272343",
        paragraph:"#2d334a",
        button:"#ffd803",
        buttontext:"#272343",
        stroke:"#272343",
        main:"#fffffe",
        highlight:"#ffd803",
        secondary:"#e3f6f5",
        tertiary:"#bae8e8"
      }
    },
  },
  plugins: [require("daisyui")],
}

