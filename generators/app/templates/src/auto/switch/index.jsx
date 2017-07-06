import './style'
import React from 'react'
import classnames from 'classnames'

const Switch = props => {
	const css = classnames('x-switch', {
		'x-switch--active': props.active
	}, props.className)
	return (
		<button className={css} onClick={props.onClick}>
			<em></em>
		</button>
	)
}

export default Switch