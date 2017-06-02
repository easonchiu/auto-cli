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
	    disableHostCheck: true,
	    port: config.develop.port,
	    proxy: {
	    	'/api/*': {
	            target: 'http://easy-mock.com/mock/59018fb47a878d73716db9bd/example',
	            pathRewrite: {
	            	'/api/': '/'
	            },
	            changeOrigin: true,
	            secure: false,
	        },
	    }
	}
})

module.exports = webpackConfig