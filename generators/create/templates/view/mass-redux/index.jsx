import styles from './style'
import React, { Component } from 'react'
import connect from 'src/redux/connect'
import reactStateData from 'react-state-data'
import mass from 'mass'


@connect
@reactStateData
@mass(styles)
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

export default View<%= upperName %>