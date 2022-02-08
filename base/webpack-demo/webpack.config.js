const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode 可选 development 或 production ，默认为后者
    // production 会默认压缩代码并进行其他优化（如 tree shaking）
  mode: 'development',
  // __dirname表示当前文件所在路径；
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    // output.filename 表示打包后的文件名，output.path 表示打包后的文件输出路径。
    filename: 'bundle.[contenthash].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      // 定义一条规则, 匹配到的js文件用babel-loader编译
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 8080,
    open: true
  }
}