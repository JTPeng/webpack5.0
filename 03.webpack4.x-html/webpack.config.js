const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  mode:'development'
}
