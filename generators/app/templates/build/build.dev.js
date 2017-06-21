const env = require('../config/dev.env')
process.env.NODE_ENV = env.NODE_ENV
process.env.ENV_NAME = env.ENV_NAME

const webpackConfig = require('./webpack.dev.conf')

module.exports = webpackConfig