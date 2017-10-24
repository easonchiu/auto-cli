const path = require('path')


// 打包的出口目录
const prodPath = 'prodPath'


/*
 * {env} 环境变量
 * {assetsRoot} 资源入口
 * {assetsPublicPath} 资源公共入口
 * {cssAssetsPath} css中的图片，字体路径，根据assetsPublicPath的路径一般需要向上一级或两级
 * {assetsSubDirectory} 资源子目录
 * {productionSourceMap} source-map
 */

module.exports = {
	develop: {
		env: require('./dev.env'),
        port: 3333,
        srcRoot: path.resolve(__dirname, '../src'),
        assetsRoot: path.resolve(__dirname, '../' + prodPath),
        assetsPublicPath: './',
		cssAssetsPath: '../',
		assetsSubDirectory: './',
		productionSourceMap: false,
	},
	production: {
		env: require('./prod.env'),
		assetsRoot: path.resolve(__dirname, '../' + prodPath),
		assetsPublicPath: './',
		cssAssetsPath: '../',
		assetsSubDirectory: './',
		productionSourceMap: false,
	},
	test1: {
		env: require('./test1.env'),
		assetsRoot: path.resolve(__dirname, '../' + prodPath),
		assetsPublicPath: './',
		cssAssetsPath: '../',
		assetsSubDirectory: './',
		productionSourceMap: false,
	},
	test2: {
		env: require('./test2.env'),
		assetsRoot: path.resolve(__dirname, '../' + prodPath),
		assetsPublicPath: './',
		cssAssetsPath: '../',
		assetsSubDirectory: './',
		productionSourceMap: false,
	},
	test3: {
		env: require('./test3.env'),
		assetsRoot: path.resolve(__dirname, '../' + prodPath),
		assetsPublicPath: './',
		cssAssetsPath: '../',
		assetsSubDirectory: './',
		productionSourceMap: false,
	},
	test4: {
		env: require('./test4.env'),
		assetsRoot: path.resolve(__dirname, '../' + prodPath),
		assetsPublicPath: './',
		cssAssetsPath: '../',
		assetsSubDirectory: './',
		productionSourceMap: false,
	},
	test5: {
		env: require('./test5.env'),
		assetsRoot: path.resolve(__dirname, '../' + prodPath),
		assetsPublicPath: './',
		cssAssetsPath: '../',
		assetsSubDirectory: './',
		productionSourceMap: false,
	}
}