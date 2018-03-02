import './style'
import React, { PureComponent } from 'react'
import VIEW from 'src/hoc/view'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@VIEW
@ComponentEvent('evt', Event)
class ViewDemo2 extends PureComponent {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<Layout className="view-demo2">
				<Layout.Header
					title={'Page2'}
					onBackClick={this.evt.goBack}
				/>

				<Layout.Body>
					body
				</Layout.Body>
			</Layout>
		)
	}
}

export default ViewDemo2