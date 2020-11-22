import { Configuration } from 'webpack';
import * as path from 'path';
import * as Htmlplugin from 'html-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const mode = process.env.NODE_ENV as Configuration['mode'];
const isProd = mode === 'production';

const config: Configuration = {
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
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    isProd && new MiniCssExtractPlugin(),
    isProd && new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin(['dist']),
    new Htmlplugin({
      template: 'src/index.html'
    })
  ].filter(Boolean)
};

export default config;
