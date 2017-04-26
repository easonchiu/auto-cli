const path = require('path')
const config = require('../config')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.conf')


// 针对生产环境修改配置
const webpackConfig = merge(baseWebpackConfig, {

	devtool: '#cheap-module-eval-source-map',

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
	],

	devServer: {
		contentBase: config.develop.srcRoot,
	    historyApiFallback: true,
	    hot: true,
	    open: true,
	    inline: true,
	    port: config.develop.port,
	    proxy: {
	    	'**': {
	            target: '',
	            changeOrigin: true,
	            secure: false,
	        },
	    }
	}
})

// 我他妈也不明白为什么不能有output，写了就没get error了
delete webpackConfig.output

module.exports = webpackConfig