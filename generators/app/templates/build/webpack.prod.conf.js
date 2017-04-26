const path = require('path')
const config = require('../config')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')


// 针对发布环境修改配置
const webpackConfig = merge(baseWebpackConfig, {

	devtool: config[process.env.NODE_ENV].productionSourceMap ? '#source-map' : false,

	plugins: [

        // 压缩js
		new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),

		//压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
		new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),

        // 提取公共脚本
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module, count) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
		}),

		// 抽babel相关的东西出来，es6/es7转es5的玩意
        new webpack.optimize.CommonsChunkPlugin({
            name: 'core',
            chunks: ['vendor'],
            minChunks: function(module, count) {
            	return (
            		module.resource && /(\/|\@)core-js\//.test(module.resource)
                )
            }
        }),

        // 上面虽然已经分离了第三方库,每次修改编译都会改变vendor的hash值，导致浏览器缓存失效。
		// 原因是vendor包含了webpack在打包过程中会产生一些运行时代码，运行时代码中实际上保存了打包后的文件名。
		// 当修改业务代码时,业务代码的js文件的hash值必然会改变。
		// 一旦改变必然会导致vendor变化。vendor变化会导致其hash值变化。
		// 下面主要是将运行时代码提取到单独的manifest文件中，防止其影响vendor.js
		new webpack.optimize.CommonsChunkPlugin({
			name: 'mainifest',
			chunks: ['core']
		}),

	],

	output: {
		path: config[process.env.NODE_ENV].assetsRoot,
		filename: utils.assetsPath('js/[name].[chunkhash].js'),
		chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
	}
})


module.exports = webpackConfig