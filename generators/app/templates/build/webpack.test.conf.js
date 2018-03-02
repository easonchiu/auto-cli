const config = require('./conf')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')

const baseWebpackConfig = require('./webpack.base.conf')

// 针对发布环境修改配置
const webpackConfig = merge(baseWebpackConfig, {

    devtool: config[process.env.PACKAGE].productionSourceMap ? '#source-map' : false,

    plugins: [

        // 设置环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.PACKAGE': JSON.stringify(process.env.PACKAGE)
        }),

        // 启用范围提升，用于改进包的体积
        new webpack.optimize.ModuleConcatenationPlugin(),
        
        // 将moduleid转为hash，提高缓存效果(没测试是将name转hash还是id转hash，应该是name，id的话就没意义了)
        new webpack.HashedModuleIdsPlugin(),

        // 抽babel相关的东西出来，es6/es7转es5的玩意，顺便先把auto抽出来，之后还要抽auto
        new webpack.optimize.CommonsChunkPlugin({
            name: 'polyfill',
            minChunks: function(module, count) {
                return module.resource &&
                    (/(\/|\@|\\)(babel-runtime|core-js|auto)(\/|\\)/).test(module.resource)
            }
        }),
        
        // 抽auto组件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'autoui',
            minChunks: function(module, count) {
                return module.resource &&
                    (/(\/|\@|\\)auto(\/|\\)/).test(module.resource)
            }
        }),

        //压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),

        // 压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
		
		// js包大小的报告，会生成stats.html于根目录下
		new Visualizer()
    ],

    output: {
        jsonpFunction: "$_$", // 默认是webpackJsonp
        path: config[process.env.PACKAGE].assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[name].[chunkhash].js'),
        publicPath: config[process.env.PACKAGE].assetsPublicPath
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'axios': 'axios',
        'react-redux': 'ReactRedux',
        'react-router': 'ReactRouter',
        'react-router-dom': 'ReactRouterDOM',
        'redux': 'Redux',
        'redux-thunk': 'ReduxThunk',
        'redux-actions': 'ReduxActions',
        'seamless-immutable': 'Immutable',
        'js-cookie': 'Cookies',
        'fastclick': 'FastClick',
        'qs': 'Qs',
        'classnames': 'classNames',
    }
})


module.exports = webpackConfig