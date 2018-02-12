import './style'
import React, { PureComponent } from 'react'
import connect from 'src/redux/connect'

import Demo from 'src/components/demo'

@connect
class ViewDemo2 extends PureComponent {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div className="view-demo2">
				<Demo>hello page2</Demo>
			</div>
		)
	}
}

export default ViewDemo2