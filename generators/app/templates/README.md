# <%= appName %>
<%= appDesc %>


#### 代码编写规范
1. 路由或根容器只能引用views包内的组件，所有的业务逻辑、state都只能出现在该组件中
2. views包内的组件可以引用containers(容器)或components(组件)
3. containers(容器)只能引用components(组件)，其他规则均不允许
4. containers与components内的组件只允许使用木偶组件
