/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        dark_cyan: "hsl(185, 75%, 39%)",
        very_dark_desaturated_blue: "hsl(229, 23%, 23%)",
        dark_grayish_blue: "hsl(227, 10%, 46%)",
        dark_gray: "hsl(0, 0%, 59%)",
      },
    },
    fontFamily: {
      Kumbh: ['Kumbh Sans', 'sans-serif'],
    }
  },
  plugins: [],
}

