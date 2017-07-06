import './style'
import React from 'react'
import classnames from 'classnames'

const Radio = props => {
	const css = classnames('x-radio', {
		'x-radio__checked': props.checked
	}, props.className)
	return (
		<i className={css}><sub></sub></i>
	)
}

export default Radio