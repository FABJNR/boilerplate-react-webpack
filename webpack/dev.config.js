'use strict'

const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    common.entry
  ],
  output: Object.assign({}, common.output, {
    filename: '[name].js',
    publicPath: ''
  }),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ filename: '[name]-[hash].css' }),
    new HtmlPlugin(common.htmlPluginConfig('template-dev.html'))
  ],
  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      common.cssLoader,
      common.fileLoader,
      common.urlLoader
    ]
  },
  devServer: {
    publicPath: '',
    hot: true,
    historyApiFallback: true,
    port: 3000
  },
  resolve: common.resolve
}
