/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        blue: "hsl(220, 15%, 55%)",
        white: "hsl(0, 0%, 100%)",
        light_gray: "hsl(212, 45%, 89%)",
        dark_blue: "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        'body': ['Outfit'],
      },
    },
  },
  plugins: [],
}
