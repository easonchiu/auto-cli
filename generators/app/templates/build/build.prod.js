const build = require('./build')
const env = require('../config/prod.env').NODE_ENV

build(env)