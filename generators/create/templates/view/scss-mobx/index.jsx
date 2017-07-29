import styles from './style'
import React, { Component } from 'react'
import connect from 'src/mobx'
import reactStateData from 'react-state-data'
import {observer} from 'mobx-react'


@connect
@reactStateData
@observer
class View<%= upperName %> extends Component {
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate(nProps, nState) {
		return this.props !== nProps || this.state !== nState
	}

	render() {
		return (
			<div className="view-<%= name %>">
				<h1><%= name %> (view)</h1>
			</div>
		)
	}
}

export default View<%= upperName %>