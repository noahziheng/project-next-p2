const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '/src/js/index.js'), // 已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname, '/dist'), // 打包后的文件存放的地方
    filename: 'bundle.js' // 打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html') // HTML 模板
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/images',
        to: 'images'
      }
    ]),
    new UglifyJsPlugin()
  ]
}
