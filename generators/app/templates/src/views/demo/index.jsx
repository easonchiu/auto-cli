import './style'
import React, { Component } from 'react'
import connect from 'src/redux/connect'

import Button from 'src/components/button'
import List from 'src/components/list'

@connect
class ViewDemo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			h1: 'auto react',
			used: 'react + react-router + redux'
		}
	}
	
	render() {
		
		const actions = this.props.$demo
		const state = this.props.$$demo

		return (
			<fieldset className="view-demo">
				<div className="logo" />
				<h1>{this.state.h1}</h1>

				<p>demo with<br />{this.state.used}</p>

				<div className="demo">
					<div className="hd">
						<Button className="btn" onClick={actions.pop}>Pop</Button>
						<Button className="btn" onClick={actions.push}>Push</Button>
						<Button className="btn" onClick={actions.clear}>Clear</Button>
					</div>

					<List resource={state.list} />
				</div>

			</fieldset>
		)
	}
}


export default ViewDemo