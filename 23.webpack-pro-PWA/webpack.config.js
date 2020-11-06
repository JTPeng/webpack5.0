const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/index.[contenthash:10].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      /** 
       * 1.帮助serviceworker快速启动
       * 2.删除旧的serviceworker
       * 生成一个serviceworker
      */
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  mode: 'production',
}
