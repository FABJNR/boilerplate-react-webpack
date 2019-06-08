'use strict'

const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const styles = new MiniCssExtractPlugin({ filename: '[name]-[hash].css' })

module.exports = {
  mode: 'production',
  entry: common.entry,
  output: common.output,
  plugins: [
    new CleanWebpackPlugin(),
    styles,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new HtmlPlugin(common.htmlPluginConfig('template.html'))
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-build',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      common.cssLoader,
      common.fileLoader,
      common.urlLoader
    ]
  },
  resolve: common.resolve
}
