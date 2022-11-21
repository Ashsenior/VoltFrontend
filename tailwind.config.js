/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/home/*.{js,ts,jsx,tsx}',
    './pages/dashboards/Meetings/*.{js,ts,jsx,tsx}',
    './pages/dashboards/Idea/*.{js,ts,jsx,tsx}',
    './pages/dashboards/TargetAudience/*.{js,ts,jsx,tsx}',
    './pages/dashboards/EditModal/*.{js,ts,jsx,tsx}',
    './pages/module/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],

}
