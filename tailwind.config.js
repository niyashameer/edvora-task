module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#292929",
        darkBlack: "#131313"
      },
      fontFamily: {
        sfRound: ["sf-pro-rounded"]
      },
      dropShadow: {
        '3xl': '0 3.5px 1.5px rgba(0, 0, 0, 0.25)',
        'light': '0 2px 2px rgba(255 , 255, 255, 0.25)'
      }
    },
  },
  plugins: [],
}
