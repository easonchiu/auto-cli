function build() {

	// webpack组件
	const webpack = require('webpack')

	// 打包配置
	const config = require('./conf')

	// 引用webpack配置
	const webpackConfig = (process.env.PACKAGE === 'production') ?
		require('./webpack.prod.conf') :
		require('./webpack.test.conf')

	// loading动画组件
	const ora = require('ora')

	// 粉笔，用于打印各种不同颜色的字
	const chalk = require('chalk')

	// 删除文件目录的组件
	const rm = require('rimraf')

	// 文件目录
	const path = require('path')

	// 开始转菊花
	const spin = ora(chalk.blue(`build for ${process.env.PACKAGE}...`))
	spin.start()

	// 删除构建目录
	// 然后重新构建项目
	rm(
		path.join(config[process.env.PACKAGE].assetsRoot),
		err => {

			if (err) throw err

			webpack(webpackConfig, (err, status) => {
				
				if (err) throw err

				process.stdout.write('\n\n' + status.toString({
		            colors: true,
		            modules: false,
		            children: false,
		            chunks: false,
		            chunkModules: false
		        }) + '\n\n')

				spin.stop()
				console.log(chalk.cyan('  Build for ' + process.env.PACKAGE + ' package complete.\n'))
			})


		}
	)
}

build()