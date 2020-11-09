const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/index.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    chunkFilename: 'js/[name]_chunk.js',
    libraryTarget: 'global',
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: 'development',
}
