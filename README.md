### yoman for auto-react



#### React项目脚手架，搭配yeoman使用

本脚手架仅限于移动端使用

#### Log
- 2.0.0
	- xxx

----
#### 特点
- React 16.0
- React-router 4
- Seamless-Immutable
- Modules-css (auto-react:create安装时可选)
- Redux-Actions (配合Redux使用)
- Classnames
- Fastclick
- Sass
- Webpack
- ES6
- Rem


#### 目录别名
- src 指向src目录
- @ 同样指向src目录
- auto 指向src中的auto目录，auto为我们的ui组件库


#### 目录结构
```
|- dist 发布（可配置，位置：build/conf.js -> prodPath变量）
|- src 开发环境
|	|- template.html 入口模板文件
|		window对象变量挂载如下：
|		window.rem 当前的rem数值
|		window.dpr 当前的dpr数值
|		window.isApp 是否在我们的app中
|		window.isWX 是否在微信中
|	|- main.jsx 入口js文件，注入基础的依赖与模板
|	|- assets 素材包
|		|- css
|			|- reset.css 初始化样式
|		|- images
|	|- auto 我们的ui组件库，使用时为：import { Layout, Button } from 'auto'
|	|- redux 数据流
|		|- actions
|		|- reducers 
|		|- store 配置的store
|		|- connect.js 连接组件与redux，在views的组件中用@connect装饰器连接
|	|- conf 配置
|		|- cdn.js 我们的cdn目录
|		|- wx.js 微信appId与微信config配置
|	|- hoc 高阶组件
|		|- asyncComponent.jsx 异步组件高阶组件
|		|- asyncPreLogin.jsx 整体外容器的预登录组件，在该文件头部有使用说明
|	|- routers 路由
|		|- index.jsx
|	|- components 组件（纯属函数组件）
|		|- [name]
|			|- index.jsx
|			|- style.scss
|	|- containers 容器组件（纯属函数容器组件，默认无该目录）
|		|- [name]
|			|- index.jsx
|			|- style.scss
|	|- views 页面组件（智能组件，所有数据请求应在该组件中触发）
|		|- [name]
|			|- index.jsx
|			|- style.scss
|	|- utils 工具类（若要使用请在main.jsx中import）
|		|- appConf.js 用于app中的默认配置
|		|- dateFormat.js 
|			对Date类扩展format方法
|			例：(new Date()).format('yyyy-MM-dd hh:mm:ss') -> 2006-07-02 08:09:04
|		|- inputEvents.js
|			对输入框添加事件
|			1.安卓部分机型下focus时调用scrollIntoViewIfNeeded方法
|			2.页面点击时让输入框失去焦点
|		|- http.js axios的封装，拦截器配置
|		|- token.js 用户token相关的方法

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
// 完成后浏览器将自动打开，或手动 localhost:3880
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
```


