const build = require('./build')
const env = require('../config/test5.env')

build(env.NODE_ENV, env.ENV_NAME)