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

#### 构建项目
```
yo auto-react
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
