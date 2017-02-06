var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'assets')
var APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.js$/,
        include : APP_DIR,
        loader: "babel-loader"
      }
    ]
  }
}
