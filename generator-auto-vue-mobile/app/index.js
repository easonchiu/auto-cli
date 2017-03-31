'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.extend({

    // 1. 接收参数
    prompting: function () {
        var prompts = [{
            type: 'input',
            name: 'appName',
            message: 'app name: ',
            default: 'autoVueApp'
        }, {
            type: 'input',
            name: 'prodPath',
            message: 'production path name: ',
            default: 'dist'
        }];

        return this.prompt(prompts).then(function (props) {
            // 1.1 将参数挂载在 this 下
            this.props = props;
        }.bind(this));
    },

    // 2. 渲染模版
    writing: function () {
        // 拷贝.开头的文件
        this.fs.copyTpl(
            this.templatePath('.*'),
            this.destinationPath(),
            {
                prodPath: this.props.prodPath,
            }
        );

        // 拷贝package.json文件
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {
                appName: this.props.appName
            }
        );

        // 拷贝readme文件
        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'),
            {
                appName: this.props.appName
            }
        );

        // 拷贝src目录
        this.fs.copyTpl(
            this.templatePath('src/**/*'),
            this.destinationPath('src/'),
            {
                appName: this.props.appName,
                prodPath: this.props.prodPath,
            }
        );
        
        // 拷贝config目录
        this.fs.copyTpl(
            this.templatePath('config/*'),
            this.destinationPath('config/'),
            {
                appName: this.props.appName,
                prodPath: this.props.prodPath,
            }
        );
        
        // 拷贝static目录
        this.fs.copy(
            this.templatePath('static/*'),
            this.destinationPath('static/')
        );

        // 拷贝test目录
        this.fs.copy(
            this.templatePath('test/*'),
            this.destinationPath('test/')
        );

        // 拷贝build目录
        this.fs.copy(
            this.templatePath('build/*'),
            this.destinationPath('build/')
        );
    },

    // 3. 安装依赖
    // install: function () {
    //     this.npmInstall();
    // }
});