const path = require('path');
const mode = process.env.NODE_ENV;
const htmlplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode,
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4200,
    overlay: true,
    stats: 'errors-only',
    hot: true
  },
  stats: {
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin(['dist']),
    new htmlplugin({
      template: 'src/index.html'
    })
  ]
};
