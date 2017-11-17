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
			loader: ['babel-loader'],
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
        	test: /\.scss$/,
        	use: ExtractTextPlugin.extract({
        		use: ['css-loader', 'sass-loader'],
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
	],

	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css'],
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
}

module.exports = webpackConfig