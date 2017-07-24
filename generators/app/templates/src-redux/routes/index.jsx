import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import ViewDemo from 'src/views/demo'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={ ViewDemo }/>
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	)
}

export default Routes