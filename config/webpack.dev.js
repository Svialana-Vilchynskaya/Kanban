const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },

  watch: true, // or flag in package.json
  devServer: {
    port: 8000,
    hot: true,
    open: true, // or flag in package.json
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
