const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const path = require('path')
const config = require('./conf')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.conf')

// 针对生产环境修改配置
const webpackConfig = merge(baseWebpackConfig, {

	devtool: '#cheap-module-eval-source-map',
	
	output: {
        path: config[process.env.PACKAGE].assetsRoot,
        filename: utils.assetsPath('js/[name].js'),
        chunkFilename: utils.assetsPath('js/[name].js'),
        publicPath: config[process.env.PACKAGE].assetsPublicPath
    },

	plugins: [

		// 设置环境变量
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.PACKAGE': JSON.stringify(process.env.PACKAGE)
		}),

		// 热更新
		new webpack.HotModuleReplacementPlugin(),
		
		// 美化本地开发时的终端界面
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: ['You application is running here http://localhost:' + config[process.env.PACKAGE].port]
			}
		})
	],

	devServer: {
		contentBase: __dirname,
		historyApiFallback: true,
		hot: true,
		open: true,
		inline: true,
		quiet: true,
		disableHostCheck: true,
		port: config[process.env.PACKAGE].port,
		proxy: {
			'/proxy/*': {
				target: 'http://test3-web.autozuche.com/appserver/h5/',
				pathRewrite: {
					'^/proxy/': '/'
				},
				changeOrigin: true,
				secure: false,
			}
		}
	}
})

module.exports = webpackConfig