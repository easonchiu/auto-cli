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
class ViewDemo extends Component {
	constructor(props) {
		super(props)

		this.change = this.change.bind(this)

		this.setData({
			h1: 'AUTO React',
			used: 'react + react-router + mobx'
		})
	}

	change(e) {
		let val = e.target.value
		let name = e.target.name

		val = val.replace(/\D/g, '').substr(0, 2)
		val = parseInt(val)

		this.props.$demo.setVal(val, parseInt(name))
	}
	
	render() {
		return (
			<div styleName="view-demo">
				<div styleName="logo" />
				<h1>{this.data.h1}</h1>
				<p>demo with<br />{this.data.used}</p>

				<div styleName="demo">
					<input styleName="input" type="number" name="1" onChange={this.change} value={this.props.$demo.val1} />
					<span>+</span>
					<input styleName="input" type="number" name="2" onChange={this.change} value={this.props.$demo.val2} />
					<span>=</span>
					<span styleName="result">{this.props.$demo.addResult}</span>
				</div>
			</div>
		)
	}
}




export default ViewDemo