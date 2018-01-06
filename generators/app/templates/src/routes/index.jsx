import React from 'react'
import { asyncComponent } from 'src/routes/asyncComponent'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
const basename = process.env.PACKAGE !== 'develop' ? 'demo' : ''

const ViewDemo = asyncComponent(e => import('src/views/demo'))
const ViewDemo2 = asyncComponent(e => import('src/views/demo2'))

const Routes = e => {
	return (
		<BrowserRouter basename={basename}>
			<Switch>
				<Route exact path="/" component={ ViewDemo } />
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes