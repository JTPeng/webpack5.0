const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/index.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // 解析css
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        //解析less
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        // 解析图片
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024, // 8kb以下的打包成base64格式
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
        },
      },
      {
        // html中的url解析
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        // 其他文件处理
        exclude: /\.(html|css|js|less|png|gif|jpg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
  },
}
