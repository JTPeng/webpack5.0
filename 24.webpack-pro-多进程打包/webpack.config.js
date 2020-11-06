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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          /* 
            thread-loader会对其后面的loader（这里是babel-loader）开启多进程打包。 
            进程启动大概为600ms，进程通信也有开销。(启动的开销比较昂贵，不要滥用)
            只有工作消耗时间比较长，才需要多进程打包
          */
          {
            loader: 'thread-loader',
            options: {
              workers: 2, // 进程2个
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: { version: 3 },
                    targets: {
                      chrome: '60',
                      firefox: '50',
                    },
                  },
                ],
              ],
              // 开启babel缓存
              // 第二次构建时，会读取之前的缓存
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
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
  externals: {
    // 拒绝jQuery被打包进来(通过cdn引入，速度会快一些)
    // 忽略的库名 -- npm包名
    jquery: 'jQuery'
  },
  mode: 'production',
}
