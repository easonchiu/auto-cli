const path = require('path')
const config = require('../config')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')

const baseWebpackConfig = require('./webpack.base.conf')


// 针对发布环境修改配置
const webpackConfig = merge(baseWebpackConfig, {

    devtool: config[process.env.ENV_NAME].productionSourceMap ? '#source-map' : false,

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
		
		// js包大小的报告，会生成stats.html于根目录下
		new Visualizer()
    ],

    output: {
        path: config[process.env.ENV_NAME].assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
        publicPath: config[process.env.ENV_NAME].assetsPublicPath
    }
})


module.exports = webpackConfig