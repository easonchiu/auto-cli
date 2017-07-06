import './style'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


class Modal extends Component{

	constructor(props){
		super(props)

		this.state = {
			isShow: false,
            animationType: 'leave'
		}
	}

	componentDidMount() {
        if (this.props.visible) {
            this.enter();
        }
    }

	componentWillReceiveProps(nextProps) {
        if (!this.props.visible && nextProps.visible) {
            this.enter()
        } else if (this.props.visible && !nextProps.visible) {
            this.leave()
        }
    }

    onAnimationEnd(){
        if (this.state.animationType !== 'leave') {
            return
        }

        this.setState({ isShow: false })

        const { onAnimationEnd } = this.props

        onAnimationEnd && onAnimationEnd()

    }


    enter() {
        this.setState({
            isShow: true,
            animationType: 'enter'
        })
    }


    leave() {
        this.setState({
        	animationType: 'leave'
        })
    }

	render(){
		const { props, state } = { ...this }
		const compContainerClassName = classnames(
			'comp-modal', 
			`comp-modal__${ props.animationName }`,
			props.className
		)

		const compContainerStyle = {
			display: state.isShow ? '' : 'none'
		}

		const compInnerClassName = classnames(
			'comp-modal__inner', 
			`comp-modal__${ props.animationName }--${ state.animationType}`
		)

		const compMaskerName = classnames(
			'comp-modal__masker', 
			state.animationType
		)

		return (
			<div className={ compContainerClassName } style={ compContainerStyle }>
				<div className={ compMaskerName } onClick={ props.onClose }></div>
				<div className={ compInnerClassName } onAnimationEnd={ ::this.onAnimationEnd }>
					{ props.children }
				</div>
			</div>
		)
	}
}


export default Modal