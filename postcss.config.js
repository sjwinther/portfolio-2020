const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./components/**/*.js', './css/**/*.css', './pages/**/*.js'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelist: ['mode-dark'],
})
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    purgecss: process.env.NODE_ENV === 'production' ? {} : false,
    cssnano: {},
  },
}
