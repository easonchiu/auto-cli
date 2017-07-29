import styles from './style'
import React, { Component } from 'react'
import connect from 'src/mobx'
import reactStateData from 'react-state-data'
import {observer} from 'mobx-react'
import mass from 'mass'

import Button from 'src/components/button'
import List from 'src/components/list'


@connect
@reactStateData
@observer
@mass(styles)
class ViewDemo extends Component {
	constructor(props) {
		super(props)

		this.setData({
			h1: 'AUTO React',
			used: 'react + react-router + mobx'
		})

	}
	
	render() {
		const store = this.props.$demo

		return (
			<div styleName="view-demo">
				<div styleName="logo" />
				<h1>{this.data.h1}</h1>
				<p>demo with<br />{this.data.used}</p>

				<div styleName="demo">
					<div styleName="hd">
						<Button styleName="btn" onClick={::store.pop}>Pop</Button>
						<Button styleName="btn" onClick={::store.push}>Push</Button>
						<Button styleName="btn" onClick={::store.clear}>Clear</Button>
					</div>
					<List resource={store.list} />
				</div>
			</div>
		)
	}
}


export default ViewDemo