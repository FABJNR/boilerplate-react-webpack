'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const crp = new ExtractTextPlugin('crp.css')
const styles = new ExtractTextPlugin('[name]-[hash].css')

module.exports = validate({
  entry: common.entry,
  output: common.output,
  plugins: [
    crp,
    styles,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlPlugin(common.htmlPluginConfig('template.html'))
  ],
  module: {
    preLoaders: [common.standardPreLoader],
    loaders: [
      common.jsLoader,
      Object.assign({}, common.cssLoader, {
        exclude: /node_modules|(style)\.css/,
        loaders: undefined,
        loader: styles.extract('style', 'css')
      }),
      {
        test: /(style)\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loader: crp.extract('style', 'css')
      }]
  },
  resolve: common.resolve
})
