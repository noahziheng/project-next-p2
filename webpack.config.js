const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // HTML 模板解析插件
const CopyWebpackPlugin = require('copy-webpack-plugin') // 文件复制插件，处理图片
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // JS 压缩插件
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 文本提取插件，提取 css
const CleanWebpackPlugin = require('clean-webpack-plugin') // 文件清理插件

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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
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
    new UglifyJsPlugin(),
    new ExtractTextPlugin('style.css'),
    new CleanWebpackPlugin(['dist'])
  ]
}
