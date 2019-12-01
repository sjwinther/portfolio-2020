module.exports = {
  theme: {
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
