const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootDir = path.resolve(process.cwd())
const assetsPath = path.resolve(rootDir, 'assets')
const srcPath = path.resolve(rootDir, 'src')

module.exports = {
  mode: 'development',
  entry: `${srcPath}/app.js`,
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/,
      },
      {
        test: /\.(c|sc)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${assetsPath}/template.html`,
    }),
  ],
  devServer: {
    port: 6969,
    open: true,
  },
  devtool: 'eval-source-map',
}
