const path = require('path')
const fs = require('fs')

require('shelljs/global')

const CWD = process.cwd()

const proxy = require('./proxy')

function isNPMInstalled() {
  const modulePath = path.resolve(CWD, 'node_modules')

  if (!fs.existsSync(modulePath)) {
    console.log('installing dependencies…\n')
    exec('npm install')
  }
}

const gulp = path.join(__dirname, '../node_modules/.bin/gulp')
const gulpfile = path.join(__dirname, 'gulpfile.babel.js')

const webpack = path.join(__dirname, '../node_modules/.bin/webpack')
const webpackConfig = path.join(__dirname, 'webpack.pro.js')

module.exports = {
  create(appname) {
    if (!appname || !appname.length) {
      console.log('APP name is required')
      process.exit()
    }

    cp('-R', path.resolve(__dirname, '../scaffolding'), path.resolve(CWD, appname))
    exec(`cd ${path.resolve(CWD, appname)} && git init`)
    console.log('Project:', appname, 'is created.')
  },
  dev(port) {
    isNPMInstalled()
    proxy.start(port)
  },
  release() {
    isNPMInstalled()
    process.env.NODE_ENV = 'production'
    console.log('Releasing…')
    exec(`${webpack} --config ${webpackConfig} && ${gulp} --color --gulpfile ${gulpfile} release`)
  },
}
