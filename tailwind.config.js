module.exports = {
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.25rem',
      default: '0.75rem',
      full: '9999px',
    },
    fontFamily: {
      flexa:
        '"GT Flexa", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      sans:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'sans-var':
        '"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      boxShadow: theme => ({
        outline: `0 0 0 2px ${theme('colors.pink.600')}`,
      }),
      colors: {
        black: '#12161E',
      },
      height: {
        '80': '20rem',
        '120': '30rem',
      },
      width: {
        '28': '7rem',
        '80': '20rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover'],
    borderRadius: ['responsive', 'focus'],
    margin: ['responsive', 'last'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
