const build = require('./build')
const env = require('../config/prod.env')

build(env.NODE_ENV, env.ENV_NAME)