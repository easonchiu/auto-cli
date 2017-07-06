import './style'
import React from 'react'
import classnames from 'classnames'

const Input = props => {
	const type = props.type || 'text'
	const addonAfter = props.addonAfter ? <div className="x-input__addonafter">{props.addonAfter}</div> : null
	const css = classnames('x-input', {
		'x-input--error': props.isError
	}, props.className)
	return (
		<div className={css}>
			<input
				className="x-input__ipt"
				value={props.value}
				onChange={props.onChange}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
				type={type}
				placeholder={props.placeholder}
				id={props.id} />
			{addonAfter}
		</div>
	)
}

export default Input