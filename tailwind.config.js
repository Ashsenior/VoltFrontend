/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/home/*.{js,ts,jsx,tsx}',
    './pages/dashboards/Meetings/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}