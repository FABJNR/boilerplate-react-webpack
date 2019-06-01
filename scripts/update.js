'use strict'

// on windows, install and use `cross-spawn`:
// const { spawn } = require('cross-spawn')

const { spawn } = require('child_process')
const pkg = require('../package.json')

const dependencies = Object.keys(pkg.dependencies)
const devDependencies = Object.keys(pkg.devDependencies)

const add = (args) => {
  return spawn('yarn', ['add'].concat(args), { stdio: 'inherit' })
}

const addDev = (args) => {
  return add(['--dev'].concat(args))
}

add(dependencies).on('close', () => {
  addDev(devDependencies).on('close', (code) => process.exit(code))
})
