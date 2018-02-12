import './style'
import React, { PureComponent } from 'react'
import connect from 'src/redux/connect'

import Demo from 'src/components/demo'

@connect
class ViewDemo extends PureComponent {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div className="view-demo">
				<Demo>hello page</Demo>
			</div>
		)
	}
}

export default ViewDemo