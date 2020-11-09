const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// entry -> string 单入口
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'index.js',
//     path: resolve(__dirname, 'dist'),
//   },
//   plugins: [new HtmlWebpackPlugin()],
//   mode: 'development',
// }

// entry -> array 单入口
// module.exports = {
//   entry: ['./src/index.js', './src/add.js'],
//   output: {
//     filename: 'index.js',
//     path: resolve(__dirname, 'dist'),
//   },
//   plugins: [new HtmlWebpackPlugin()],
//   mode: 'development',
// }

// entry -> objetc 多入口
module.exports = {
  entry: {
    index: './src/index.js',
    add: './src/add.js',
    count: './src/count.js',
  },
  output: {
    // filename: 'index.js',
    path: resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: 'development',
}
