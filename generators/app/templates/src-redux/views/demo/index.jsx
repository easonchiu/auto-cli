import styles from './style'
import React, { Component } from 'react'
import connect from 'src/redux/connect'
import reactStateData from 'react-state-data'
import mass from 'mass'

import Button from 'src/components/button'
import List from 'src/components/list'


@connect
@reactStateData
@mass(styles)
class ViewDemo extends Component {
	constructor(props) {
		super(props)

		this.setData({
			h1: 'AUTO React',
			used: 'react + react-router + redux'
		})
	}
	
	render() {
		
		const actions = this.props.$demo
		const state = this.props.$$demo

		return (
			<fieldset styleName="view-demo">
				<div styleName="logo" />
				<h1>{this.data.h1}</h1>

				<p>demo with<br />{this.data.used}</p>

				<div styleName="demo">
					<div styleName="hd">
						<Button styleName="btn" onClick={actions.pop}>Pop</Button>
						<Button styleName="btn" onClick={actions.push}>Push</Button>
						<Button styleName="btn" onClick={actions.clear}>Clear</Button>
					</div>

					<List resource={state.list} />
				</div>

			</fieldset>
		)
	}
}


export default ViewDemo