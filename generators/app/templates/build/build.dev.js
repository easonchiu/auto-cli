const env = require('../config/dev.env').NODE_ENV
process.env.NODE_ENV = env

const webpackConfig = require('./webpack.dev.conf')

module.exports = webpackConfig