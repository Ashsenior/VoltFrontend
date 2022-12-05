/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {

  //         "primary": "#1bbec6",

  //         "secondary": "#1057a3",

  //         "accent": "#86c1d6",

  //         "neutral": "#272A34",

  //         "base-100": "#333239",

  //         "info": "#97B5DD",

  //         "success": "#34DF7B",

  //         "warning": "#F9B562",

  //         "error": "#F12749",
  //       },
  //     },
  //   ],
  // },
  plugins: [
    require("daisyui")
  ],

}
