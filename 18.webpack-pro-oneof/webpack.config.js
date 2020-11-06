const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { loader } = require('mini-css-extract-plugin')

// 抽取公共代码
const commCssPlugin = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 单独配置loader
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      // 使用postcss-preset-env插件
      plugins: [() => require('postcss-preset-env')()],
    },
  },
]

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/index.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // elsint语法检查
        test: /\.js$/,
        exclude: /node_modules/, // 忽略node_modules
        enforce: 'pre', // 优先执行
        loader: 'eslint-loader',
        options: {
          // 自动修复
          fix: true,
        },
      },
      {
        oneOf: [
          {
            // 解析css
            test: /\.css$/,
            use: [...commCssPlugin],
          },
          {
            // 解析less
            test: /\.less$/,
            use: [...commCssPlugin, 'less-loader'],
          },
          {
            // 解析图片
            test: /\.(png|gif|jpg)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
            },
          },
          {
            // 处理html中的url
            test: /\.html$/,
            loader: 'html-loader',
          },
          {
            // 处理其他文件
            exclude: /\.(js|css|less|html|png|jpg|gif)/,
            loader: 'file-loader',
            options: {
              name: '[hash:10].[ext]',
              outputPath: 'media',
            },
          },
          {
            // 按需加载
            test: /\.js$/,
            // 排除插件内的js
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              // 预设
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // 按需加载
                    useBuiltIns: 'usage',
                    // 指定版本
                    corejs: {
                      version: 3,
                    },
                    targets: {
                      // 指定兼容到什么版本的浏览器
                      chrome: '60',
                      firefox: '50',
                      ie: '9',
                      safari: '10',
                      edge: '17',
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 输出路径
      filename: 'css/index.css',
    }),
    // 压缩css
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'production',
}
