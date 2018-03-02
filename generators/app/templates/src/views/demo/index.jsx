import './style'
import React, { PureComponent } from 'react'
import VIEW from 'src/hoc/view'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@VIEW
@ComponentEvent('evt', Event)
export default class View extends PureComponent {
	constructor(props) {
		super(props)
	}

    renderAfter() {
		return (
			<a href={'javascript:;'} onClick={this.evt.nextClick}>
				Next
			</a>
		)
	}
	
	render() {
		const list = this.props.$$demo.list

		return (
			<Layout className={'view-demo'}>
				<Layout.Header
					title={'Home'}
                    onBackClick={this.evt.goBack}
                    addonAfter={this.renderAfter()}
				/>

				<Layout.Body>

					<div className={'buttons'}>
                        <Button mini onClick={this.evt.pop}>
							Pop
                        </Button>
						{' '}
                        <Button mini onClick={this.evt.push}>
                            Push
                        </Button>
                        {' '}
                        <Button mini onClick={this.evt.clear}>
                            Clear
                        </Button>
                        {' '}
                        <Button mini onClick={this.evt.asyncPush}>
                            Async Push
                        </Button>
					</div>

					{
                        list.length ?
						<Cell>
                            {
                                list.map(res => (
                                    <Cell.Row key={res}>
                                        item: {res}
                                    </Cell.Row>
                                ))
                            }
                        </Cell> :
						<p>empty</p>
                    }


				</Layout.Body>

			</Layout>
		)
	}
}