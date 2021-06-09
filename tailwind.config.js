module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          blue: {
            base: "hsl(203, 89%, 53%)",
            dark: "hsl(203, 89%, 46%)",
            light: "hsl(203, 89%, 96%)"
          },
          darkgray: "#657786",
          extralightgray: "#E1E8ED",
          lightgray: "#AAB8C2",
          gray:"#15202b",
          black: "#14171A",
          opacity: "rgba(29, 161, 242,.1)",
          hover:"#202E3A"
        }
      }
    },
    theme: {
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
