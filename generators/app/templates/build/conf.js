const path = require('path')

// 打包目录的前缀
const prefixPath = ''

// 打包的出口目录
// const prodPath = '<%= prodPath %>'
const prodPath = 'demo'

/*
 * {assetsRoot} 资源入口
 * {assetsPublicPath} 资源公共入口
 * {cssAssetsPath} css中提取的图片，字体路径
 * {assetsSubDirectory} 资源子目录
 * {productionSourceMap} source-map
 */

module.exports = {
	develop: {
        port: 3333,
        assetsPublicPath: '/',
		cssAssetsPath: '/',
		assetsSubDirectory: './',
		productionSourceMap: false,
	},
	production: {
		assetsRoot: path.resolve(__dirname, '../' + prodPath),
		assetsPublicPath: prefixPath + '/' + prodPath + '/',
		cssAssetsPath: prefixPath + '/' + prodPath + '/',
		assetsSubDirectory: './',
		productionSourceMap: false,
	},
	test: {
		assetsRoot: path.resolve(__dirname, '../' + prodPath),
		assetsPublicPath: prefixPath + '/' + prodPath + '/',
		cssAssetsPath: prefixPath + '/' + prodPath + '/',
		assetsSubDirectory: './',
		productionSourceMap: true,
	}
}
