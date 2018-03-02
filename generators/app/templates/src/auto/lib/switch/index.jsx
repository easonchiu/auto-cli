import './style'
import React from 'react'
import classnames from 'classnames'

const Switch = props => {
	const io = props.i !== undefined && props.o !== undefined
	const css = classnames('x-switch', {
		'x-switch--active': props.active,
		'x-switch--io': io,
		'x-switch--icon': props.icon
	}, props.className)
	return (
		<a href="javascript:;" className={css} onClick={props.onClick}>
			{
				io ? <sub>{props.i}</sub> : null
			}
			{
				io ? <sup>{props.o}</sup> : null
			}
			<em></em>
		</a>
	)
}

export default Switch