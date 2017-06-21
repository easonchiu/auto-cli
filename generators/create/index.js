'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


// 首字母转大写
let firstUpperCase = function(str){
    return str.replace(/^\S/, function(s){
        return s.toUpperCase();
    });
}

let upperCase = function(str){
    return str.toUpperCase();
}


module.exports = yeoman.extend({


    // 0. 重写构造函数
    constructor: function () {
        // 加上apply这句就能接收命令参数了
        yeoman.apply(this, arguments);
    },

    // 1. 接收参数
    prompting: function () {

        // 第一步，选择要创建什么
        var prompts = [{
            type: 'list',
            name: 'createBy',
            message: 'what do you need to create?: ',
            choices: [
                'component',
                'container',
                'view',
                'reducer'
            ]
        }];

        // 创建组件
        var promptsComponent = [{
            type: 'input',
            name: 'name',
            message: 'component name: ',
            default: 'comp'
        },{
            type: 'input',
            name: 'path',
            message: 'path: ',
            default: 'src/components/'
        },{
            type: 'confirm',
            name: 'mass',
            message: 'css modules?',
            default: 'n'
        }];

        // 创建容器
        var promptsContainer = [{
            type: 'input',
            name: 'name',
            message: 'container name: ',
            default: 'con'
        },{
            type: 'input',
            name: 'path',
            message: 'path: ',
            default: 'src/containers/'
        },{
            type: 'confirm',
            name: 'mass',
            message: 'css modules?',
            default: 'n'
        }];

        // 创建页面
        var promptsView = [{
            type: 'input',
            name: 'name',
            message: 'view name: ',
            default: 'index'
        },{
            type: 'input',
            name: 'path',
            message: 'path: ',
            default: 'src/views/'
        },{
            type: 'confirm',
            name: 'mass',
            message: 'css modules?',
            default: 'n'
        }];

        // 创建reducer
        var promptsReducer = [{
            type: 'input',
            name: 'name',
            message: 'reducer name: ',
            default: ''
        }, {
            type: 'input',
            name: 'path',
            message: 'path: ',
            default: 'src/redux/'
        }]

        // 结束确定
        var promptsOk = [{
            type: 'confirm',
            name: 'ok',
            message: 'ok?',
        }];

        return this.prompt(prompts).then(props => {
            this.props = props;
            switch (props.createBy) {
                case 'component':
                    return this.prompt(promptsComponent);
                case 'container':
                    return this.prompt(promptsContainer);
                case 'view':
                    return this.prompt(promptsView);
                case 'reducer':
                    return this.prompt(promptsReducer);
                default:
                    return this.prompt(promptsComponent);
            }
            
        }).then(props => {
            this.props.name = props.name;
            this.props.path = props.path;
            this.props.mass = props.mass;
            return this.prompt(promptsOk);
        }).then(props => {
            this.props.ok = props.ok;
        });
    },

    // 2. 渲染模版
    writing: function () {
        // 最后确认时选择n时停止渲染模板
        if (!this.props.ok) {
            console.log(chalk.red('stopped'));
            return false;
        }


        if (this.props.createBy !== 'reducer') {

            this.props.upperName = firstUpperCase(this.props.name);

            var type = this.props.mass ? 'mass' : 'scss'

            // 拷贝jsx文件
            this.fs.copyTpl(
                this.templatePath(this.props.createBy + '/' + type + '/index.jsx'),
                this.destinationPath(`${this.props.path}/${this.props.name}/index.jsx`),
                {
                    upperName: this.props.upperName,
                    name: this.props.name
                }
            );

            // 拷贝css文件
            this.fs.copyTpl(
                this.templatePath(this.props.createBy + '/' + type + '/style.' + type),
                this.destinationPath(`${this.props.path}/${this.props.name}/style.${type}`),
                {
                    upperName: this.props.upperName,
                    name: this.props.name
                }
            );
        }

        if (this.props.createBy === 'reducer') {

            this.props.upperName = upperCase(this.props.name);

            // 拷贝action文件
            this.fs.copyTpl(
                this.templatePath(this.props.createBy + '/action.js'),
                this.destinationPath(`${this.props.path}/actions/${this.props.name}.js`),
                {
                    upperName: this.props.upperName,
                    name: this.props.name
                }
            );
            // 拷贝reducer文件
            this.fs.copyTpl(
                this.templatePath(this.props.createBy + '/reducer.js'),
                this.destinationPath(`${this.props.path}/reducers/${this.props.name}.js`),
                {
                    upperName: this.props.upperName,
                    name: this.props.name
                }
            );
        }

    },

    // 3. 完事了
    done: function () {
        console.log(chalk.bgBlue('done!'));
    }
});