const path = require('path')
const config = require('./conf')
const utils = require('./utils')
const chalk = require('chalk')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HappyPack = require('happypack')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

const webpackIsomorphicToolsPlugin = 
  // webpack-isomorphic-tools settings reside in a separate .js file 
  // (because they will be used in the web server code too).
  new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools-configuration'))
  // also enter development mode since it's a development webpack configuration
  // (see below for explanation)
  .development()

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

const webpackConfig = {
	entry: {
		app: resolve('src/main.jsx')
	},

	module: {
		rules: [{
			test: /\.js[x]?$/,
			loader: 'happypack/loader?id=jsx',
			include: [resolve('src')],
		}, {
        	test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      		loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                publicPath: config[process.env.PACKAGE].cssAssetsPath,
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                publicPath: config[process.env.PACKAGE].cssAssetsPath,
            }
        }, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
        		use: ['css-loader'],
        	})
		}, {
        	test: /\.scss$/,
        	use: ExtractTextPlugin.extract({
        		use: ['css-loader', 'sass-loader'],
        	})
        }, {
	        test: webpackIsomorphicToolsPlugin.regularExpression('images'),
	        loader: 'url-loader?limit=10240', // any image below or equal to 10K will be converted to inline base64 instead
	    }]
	},

	plugins: [
		
		// 多线程打包
		new HappyPack({
			id: 'jsx',
			threads: 4,
			loaders: ['babel-loader']
		}),

		// 提取html模板
		new HtmlWebpackPlugin({
			template: 'src/template.html',
			filename: 'index.html',
			inject: 'body', // 所有javascript资源将被注入至body底部
			minify: {
				removeComments: true, // 删除注释
				collapseWhitespace: true, // 压缩成一行
				removeAttributeQuotes: false // 删除引号
			},
			chunksSortMode: 'dependency' // 按照不同文件的依赖关系来排序
		}),

		// 提取公共样式
		new ExtractTextPlugin({
			filename: utils.assetsPath('css/[name].[hash:7].css'),
			allChunks: true,
		}),
		
		webpackIsomorphicToolsPlugin
	],

	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css', '.mass'],
		alias: {
			'src': resolve('src'),
			'@': resolve('src'),
			'auto': resolve('src/auto'),
			'$assets': resolve('src/assets'),
			'$components': resolve('src/components'),
			'$containers': resolve('src/containers'),
			'$redux': resolve('src/redux'),
			'$views': resolve('src/views'),
		}
	}
}

module.exports = webpackConfig