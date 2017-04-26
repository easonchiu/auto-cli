import './style'
import React, { Component } from 'react'

import connect from 'src/redux/connectProps'

class View<%= upperName %> extends Component {
	constructor(props) {
		super(props)
	}
	shouldComponentUpdate(nextProps, nextState) {
		return true
	}
	render() {
		return (
			<div className="view-<%= name %>">
				<h1><%= name %> (view)</h1>
			</div>
		)
	}
}

export default connect(View<%= upperName %>)