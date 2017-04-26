import './style'
import React, { Component } from 'react'

import connect from 'src/redux/connectProps'

import List from 'src/containers/list'

class ViewDemo extends Component {
	constructor(props) {
		super(props)

		this.buttonClick = this.buttonClick.bind(this);

		this.list = [{
			button: 'async btnA',
			click: this.buttonClick,
		}, {
			button: 'btnB',
			click: this.buttonClick,
		}]

	}
	buttonClick(target) {
		if (target === 'async btnA') {
			this.props.$demo.anyncEmit({
				name: target + '(async state in views/demo/index.jsx)'
			})
		} else {
			this.props.$demo.emit({
				name: target + '(state in views/demo/index.jsx)'
			})
		}
	}
	render() {
		return (
			<fieldset className="view-demo">
				<legend>I am 'demo' view</legend>
				<h1 className="title">demo view with react</h1>
				<p className="info">store: { this.props.$$demo.name }</p>
				<List content={ this.list } />
				<br />
				<List content={ this.list } />
			</fieldset>
		)
	}
}

export default connect(ViewDemo)