const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'js/bundle.[hash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
