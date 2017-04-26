const path = require('path')
const config = require('../config')


exports.assetsPath = function(_path) {
    var assetsSubDirectory = config[process.env.NODE_ENV].assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}