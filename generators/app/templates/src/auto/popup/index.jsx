import './style'
import React, { Component } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from 'src/auto/button'
import Cell from 'src/auto/cell'

import Modal from 'src/auto/modal'

const defaultProps = {
	visible: false,
	animationName: 'slideUp',
	animationType: 'leave',
	onClose: () => {},
	onOk: () => {}
}

const propTypes = {
	visible: PropTypes.bool,
	animationName: PropTypes.string,
	title: PropTypes.string,
	animationType: PropTypes.string,
	subTitle: PropTypes.string,
	onOk: PropTypes.func,
	onClose: PropTypes.func
}


class Popup extends Component {

	constructor(props){
		super(props)
	}

	componentDidMount() {
		this._container = document.createElement('div')
        document.body.appendChild(this._container)

        this._renderPopup()
	}

	componentDidUpdate() {
		this._renderPopup()
	}

	componentWillUnmount() {
        document.body.removeChild(this._container)
    }

	_popup() {
		const { props, state } = this
		const css = classnames('comp-popup__content', {
			'comp-popup__content--cell': props.cell
		})
		
		return (
			<Modal {...props}>
				<div className={css}>
					{
						props.title ? <h1>{ props.title }</h1> : null
					}
					{
						props.subTitle ? <h2>{ props.subTitle }</h2> : null
					}
					{
						!props.cell ?
						<div className="comp-popup__content__text">
		                	{ props.children }
		                </div> :
		                null
					}
	                { props.cell }
	                <footer className="comp-popup__close">
	                	{
	                		props.animationName === 'dialog' && props.btnOkText ?
	                		<Button onClick={ props.onOk }>{ props.btnOkText }</Button> :
	                		null
	                	}
	                	{
	                		!props.cell ?
	                		<a href="javascript:;"
		                		className="comp-popup__close__btn"
		                		onClick={ props.onClose }>
		                		{ props.animationName !== 'dialog'? null: props.btnCloseText }
		                	</a> :
		                	<Cell>
								<Cell.Row onClick={ props.onClose }>{props.btnCloseText}</Cell.Row>
							</Cell>
	                	}
	                </footer>
				</div>
            </Modal>
		)
	}

	_renderPopup() {
		unstable_renderSubtreeIntoContainer(
			this,
			this._popup(),
			this._container
		)
	}

	render() {
		return null
	}
}


Popup.defaultProps = defaultProps
Popup.propTypes = propTypes

export default Popup

