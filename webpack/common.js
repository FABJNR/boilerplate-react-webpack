'use strict'

const { join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist')
}

module.exports = {
  paths,
  entry: join(paths.src, 'index'),
  output: {
    path: paths.dist,
    filename: '[name]-[hash].js'
  },
  htmlPluginConfig: (template) => ({
    title: 'Boilerplate React + Webpack',
    template: join(paths.src, 'html', template)
  }),
  standardPreLoader: {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    include: paths.src,
    use: 'standard-loader'
  },
  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: paths.src,
    use: 'babel-loader'
  },
  cssLoader: {
    test: /\.css$/,
    exclude: /node_modules/,
    include: paths.src,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
  },
  resolve: {
    alias: {
      src: paths.src,
      components: join(paths.src, 'components'),
      utils: join(paths.src, 'utils')
    }
  }
}
