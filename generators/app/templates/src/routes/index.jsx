import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'


import ViewDemo from 'src/views/demo'


const router = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={ ViewDemo }/>
				<Redirect from="*" to="/" />
			</div>
		</Router>
	)
}

export default router