const path = require('path')
const config = require('./conf')

exports.assetsPath = function(pathurl) {
    var assetsSubDirectory = config[process.env.PACKAGE].assetsSubDirectory
    return path.posix.join(assetsSubDirectory, pathurl)
}