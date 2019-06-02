'use strict'

const common = require('../webpack/common')

module.exports = async ({ config, mode }) => {
  config.module.rules = (config.module.rules || []).concat(common.standardPreLoader)
  config.resolve = common.resolve

  return config
}
