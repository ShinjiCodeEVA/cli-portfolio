/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        fascinate: ["Fascinate Inline", "cursive"],
      },
      colors: {
        'cyan-blue': "#1e283c",
        'cyan-green': "#2dbd66",
        'cyan-yellow': "#e6b20f",
        'cyan-red': "#e9444d"
      }
    },
  },
  plugins: [],
}