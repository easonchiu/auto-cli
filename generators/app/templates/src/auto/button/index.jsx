import './style'
import React from 'react'
import classnames from 'classnames'

const Button = props => {
	const css = classnames('x-button', {
		'x-button__ghost': props.ghost,
		'x-button__disabled': props.disabled
	}, props.className)
	return (
		<button className={css} style={props.style} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default Button