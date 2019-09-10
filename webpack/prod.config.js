'use strict'

const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
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
        NODE_ENV: '"production"'
      }
    }),
    new HtmlPlugin(Object.assign({}, common.htmlPluginConfig('template.html'), {
      minify: {
        collapseWhitespace: true
      },
      chunksSortMode: (chunk1, chunk2) => {
        const order = ['react-build', 'vendor', 'main']
        const left = order.indexOf(chunk1.names[0])
        const right = order.indexOf(chunk2.names[0])
        return left - right
      }
    }))
  ].concat(
    process.env.ANALYZER ? new BundleAnalyzerPlugin() : []
  ),
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom|fbjs|preact|preact-compat)[\\/]/,
          name: 'react-build',
          chunks: 'initial'
        },
        vendors: {
          test: /[\\/]node_modules[\\/](?!react|react-dom|fbjs|preact|preact-compat)/,
          name: 'vendor',
          chunks: 'initial'
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
  resolve: {
    alias: Object.assign({}, common.resolve.alias, {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    })
  }
}
