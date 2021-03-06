const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')


// module.exports = withCSS(withLess({
//     javascriptEnabled: true
//   }));

module.exports = withCSS(withLess({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config
  }
}))