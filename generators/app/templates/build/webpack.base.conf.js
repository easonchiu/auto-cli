const path = require('path')
const config = require('../config')
const utils = require('./utils')
const chalk = require('chalk')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

process.env.NODE_ENV = JSON.parse(process.env.NODE_ENV)
process.env.ENV_NAME = JSON.parse(process.env.ENV_NAME)

const env = config[process.env.ENV_NAME].env

const webpackConfig = {
	entry: {
		app: resolve('src/main.jsx')
	},

	output: {
		filename: utils.assetsPath('js/[name].js'),
		chunkFilename: utils.assetsPath('js/[id].js'),
	},

	module: {
		rules: [{
			test: /\.js[x]?$/,
			loader: 'babel-loader',
			include: [resolve('src'), resolve('test')],
		}, {
        	test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      		loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                publicPath: config[process.env.ENV_NAME].cssAssetsPath,
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                publicPath: config[process.env.ENV_NAME].cssAssetsPath,
            }
        }, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
        		use: ['css-loader'],
        	})
		}, {
        	test: /\.mass$/,
        	use: ExtractTextPlugin.extract({
        		use: ['css-loader?modules&importLoaders=1&localIdentName=_[hash:base64:11]', 'sass-loader'],
        	})
        }, {
        	test: /\.scss$/,
        	use: ExtractTextPlugin.extract({
        		use: ['css-loader', 'sass-loader'],
        	})
        }, {
        	test: /\.less$/,
        	use: ExtractTextPlugin.extract({
        		use: ['css-loader', `less-loader?{"modifyVars":${JSON.stringify({"primary-color": "#00bb55"})}}`],
        	})
        }]
	},

	plugins: [

		// 环境变量
		new webpack.DefinePlugin({
            'process.env': env
        }),
	
		// 启用范围提升，用于改进包的体积
        new webpack.optimize.ModuleConcatenationPlugin(),

		// 提取html模板
		new HtmlWebpackPlugin({
			template: 'src/template.html',
			filename: 'index.html',
			inject: 'body', // 所有javascript资源将被注入至body底部
			minify: {
				removeComments: true, // 删除注释
				collapseWhitespace: true, // 压缩成一行
			},
			chunksSortMode: 'dependency' //按dependency的顺序引入
		}),

		// 提取公共样式
		new ExtractTextPlugin({
			filename: utils.assetsPath('css/[name].[hash:7].css'),
			allChunks: true,
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

	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css', '.mass'],
		alias: {
			'src': resolve('src'),
			'auto$': resolve('src/auto'),
			'mass$': resolve('src/assets/libs/mass'),
		}
	}
}

module.exports = webpackConfig