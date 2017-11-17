import React from 'react'
import { HashRouter, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
const Router = process.env.ENV_NAME === 'production' ? BrowserRouter : HashRouter

import ViewDemo from 'src/views/demo'

const Routes = e => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={ ViewDemo } />
				<Redirect to="/" />
			</Switch>
		</Router>
	)
}

export default Routes