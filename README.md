### yoman for auto-react


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
|		|- connectProps.js 连接组件与redux
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
$ yo auto-react // 之后根据提示配置一些信息
$ yarn // 安装npm包

// 安装完成之后
npm run dev // 浏览器将自动打开，或手动 localhost:3333
```


#### 扩展项目
```
yo auto-react:create
```
目前可扩展的有
```
component
container
view
reducer
```

#### Css Modules
支持css-modules，为了与scss能共同使用，css-modules的样式文件使用.mass，如果需要更换css-modules样式名生成的规则，请到`build/webpack.base.conf.js`中打相应的rules进行修改
