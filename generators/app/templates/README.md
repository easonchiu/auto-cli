## <%= appName %>

<%= appDesc %>

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
// 安装npm包
$ yarn

// 安装完成之后
// 完成后浏览器将自动打开，或手动 localhost:3880
$ npm run dev
```