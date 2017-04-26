'use strict';
var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')


module.exports = yeoman.extend({

    // 0. 重写构造函数
    constructor: function () {
        // 加上apply这句就能接收命令参数了
        yeoman.apply(this, arguments)
    },

    // 1. 接收参数
    prompting: function () {
        var prompts = [{
            type: 'input',
            name: 'appName',
            message: 'app name: ',
            default: 'autoReactApp'
        }, {
            type: 'input',
            name: 'appDesc',
            message: 'desc: ',
            default: '',
        }, {
            type: 'input',
            name: 'prodPath',
            message: 'production path name: ',
            default: 'dist',
        }, {
            type: 'confirm',
            name: 'ok',
            message: 'ok?',
        }];

        return this.prompt(prompts).then(function (props) {
            // 1.1 将参数挂载在 this 下
            this.props = props;
        }.bind(this))
    },

    // 2. 渲染模版
    writing: function () {
        // 最后确认时选择n时停止渲染模板
        if (!this.props.ok) {
            console.log(chalk.red('stopped'))
            return false;
        }

        // 拷贝.开头的文件
        this.fs.copyTpl(
            this.templatePath('.*'),
            this.destinationPath(),
            {
                prodPath: this.props.prodPath,
            }
        )

        // 拷贝package.json文件
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {
                appName: this.props.appName,
                appDesc: this.props.appDesc
            }
        )

        // 拷贝yarn.lock
        this.fs.copy(
            this.templatePath('yarn.lock'),
            this.destinationPath('yarn.lock')
        )

        // 拷贝readme文件
        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'),
            {
                appName: this.props.appName,
                appDesc: this.props.appDesc
            }
        )

        // 拷贝src目录
        this.fs.copy(
            this.templatePath('src/**/*'),
            this.destinationPath('src/')
        )

        // 拷贝build目录
        this.fs.copy(
            this.templatePath('build/*'),
            this.destinationPath('build/')
        )

        // 拷贝config目录
        this.fs.copyTpl(
            this.templatePath('config/*'),
            this.destinationPath('config/'),
            {
                prodPath: this.props.prodPath,
            }
        )

    },

    // 3. 安装依赖
    install: function () {
        console.log(chalk.bgBlue('done, please input \'yarn\'!'))
        
        // this.npmInstall()
    }
})