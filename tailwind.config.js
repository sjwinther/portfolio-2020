module.exports = {
  theme: {
    fontFamily: {
      sans:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      "sans-var":
        '"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
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
    backgroundColor: ["responsive", "hover", "focus", "dark", "dark-hover"],
    borderColor: ["responsive", "hover", "focus", "dark", "dark-hover"],
    margin: ["responsive", "last"],
    textColor: ["responsive", "hover", "focus", "dark", "dark-hover"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};
