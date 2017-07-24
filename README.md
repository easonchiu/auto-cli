### yoman for auto-react


#### React项目脚手架，搭配yeoman使用

webpack在打test1-5的包略偏向本公司环境使用，使用其中一个即可，1-5除了环境变量(process.env.ENV_NAME)之外，并无多大区别 
本脚手架中的reset样式文件偏向移动端使用，若使用Pc端请自备

----
#### 特点
- React
- React-router
- Redux / Mobx (可选)
- Seamless-Immutable (配合Redux使用)
- Modules-css (auto-react:create安装时可选)
- Redux-Actions (配合Redux使用)
- Classnames
- Fastclick (若不需要请在入口文件main.jsx中删除相关代码)
- React-state-data (个人开发的一个管理state的轻量级库)
- Sass
- Webpack
- ES6
- Rem (若用于Pc端或不需要Rem单位请在template.html的<head>中删除相关js脚本)

#### Log
##### 1.2.5
- 安装时可选择mobx或者redux

##### 1.2.4
- 添加react-state-data库，方便state管理
- 默认支持@装饰器写法

##### 1.2.3
- 修复一些bug

##### 1.2.2  
- redux中的state使用seamless-immutable  
- view中默认的shouldComponentUpdate语法  
- webpack在打包test包时使用正式版本的js代码，同时生成包大小的报告  
- 升级webpack至3.0.0，并使用ModuleConcatenationPlugin插件  


#### 目录结构：
```
|- dist 发布（可配置）
|- src 开发环境
|	|- template.html 入口模板文件
|	|- main.jsx 入口js文件，注入基础的依赖与模板
|	|- assets 素材包
|		|- fonts
|		|- images
|		|- libs
|	|- redux
|		|- actions
|		|- reducers 
|		|- store 配置的store
|		|- connect.js 连接组件与redux
|	|- mobx
|		|- index.js 连接组件与mobx
|	|- routers 路由
|		|- index.jsx
|	|- components 组件（纯属函数组件）
|		|- [name]
|			|- index.jsx
|			|- style.scss
|	|- containers 容器组件（纯属函数容器组件）
|		|- [name]
|			|- index.jsx
|			|- style.scss
|	|- views 页面组件
|		|- [name]
|			|- index.jsx
|			|- style.scss
```

#### 使用


```
// 安装yeoman
$ npm install -g yo

// 然后安装脚手架
$ npm install -g generator-auto-react

// 构建项目
$ mkdir myApp
$ cd myApp
$ yo auto-react

... // 根据提示配置一些信息

// 安装npm包
$ yarn

// 安装完成之后
// 完成后浏览器将自动打开，或手动 localhost:3333
$ npm run dev
```


#### 扩展项目
```
$ yo auto-react:create
```
目前可扩展的有
```
component
container
view
reducer // 增加完之后要手动在src/redux/actions/index.js与src/redux/reducers/index.js中引入
mobx state // 
```

#### Css Modules
支持css-modules，为了与scss能共同使用，css-modules的样式文件使用.mass，如果需要更换css-modules样式名生成的规则，请到`build/webpack.base.conf.js`中打相应的rules进行修改
