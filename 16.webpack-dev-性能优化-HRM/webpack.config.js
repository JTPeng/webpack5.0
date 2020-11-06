const { resolve } = require('path')
const HtmlWebpackPlugins = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/index.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // css解析  css是在js中引入的。无需单独一个文件
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        // less解析
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        // css内的图片url处理
        test: /\.(png|gif|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
        },
      },
      {
        // html中的url处理
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        // 其他文件处理
        exclude: /\.(html|css|less|png|jpg|gif|js)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugins({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
}
