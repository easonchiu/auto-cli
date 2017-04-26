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

const env = config[process.env.NODE_ENV].env


module.exports = {
	entry: {
		app: resolve('src/main.jsx')
	},

	output: {
		path: config[process.env.NODE_ENV].assetsRoot,
		filename: '[name].js',
		publicPath: config[process.env.NODE_ENV].assetsPublicPath
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
                publicPath: config[process.env.NODE_ENV].cssAssetsPath,
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                publicPath: config[process.env.NODE_ENV].cssAssetsPath,
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
	],

	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css'],
		alias: {
			'src': resolve('src')
		}
	}
}

