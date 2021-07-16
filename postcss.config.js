module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss':
      process.env.NODE_ENV === 'production'
        ? {
            content: [
              './components/**/*.js',
              './css/**/*.css',
              './pages/**/*.js',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: ['mode-dark'],
          }
        : false,
    cssnano: {},
  },
}
