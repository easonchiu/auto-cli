import React from 'react'
import AsyncComponent from 'src/hoc/asyncComponent'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'


const ViewDemo = AsyncComponent(e => import('src/views/demo'))
const ViewDemo2 = AsyncComponent(e => import('src/views/demo2'))

// 定义basename
const basename = process.env.PACKAGE !== 'develop' ? 'demo' : ''

// 配置路由
const Routes = e => {
	return (
		<BrowserRouter basename={basename}>
			<Switch>
				<Route exact path="/" component={ ViewDemo } />
				<Route exact path="/2" component={ ViewDemo2 } />
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes