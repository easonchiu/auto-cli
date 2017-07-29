import styles from './style'
import React, { Component } from 'react'
import connect from 'src/mobx'
import reactStateData from 'react-state-data'
import {observer} from 'mobx-react'
import mass from 'mass'


@connect
@reactStateData
@observer
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