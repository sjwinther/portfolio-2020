module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    )
    return config
  },
}
