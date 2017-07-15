import styles from './style'
import React, { Component } from 'react'
import mass from 'src/assets/libs/mass'
import connect from 'src/redux/connectProps'
import reactStateData from 'react-state-data'


class View<%= upperName %> extends Component {
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate(nProps, nState) {
		return this.props !== nProps || this.state !== nState
	}

	render() {
		return (
			<div styleName="view-<%= name %>">
				<h1><%= name %> (view)</h1>
			</div>
		)
	}
}

export default connect(reactStateData(mass(View<%= upperName %>, styles)))