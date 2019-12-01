module.exports = {
  theme: {
    fontFamily: {
      sans:
        '"Kontrapunkt Miki", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    extend: {
      boxShadow: theme => ({
        outline: `0 0 0 2px ${theme("colors.pink.600")}`
      }),
      colors: {
        black: "#12161E"
      },
      width: {
        "80": "20rem"
      }
    }
  },
  variants: {
    margin: ["responsive", "last"]
  },
  plugins: []
};
