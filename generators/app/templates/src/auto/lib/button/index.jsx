import './style'
import React from 'react'
import cn from 'classnames'
import loadingSpin from '../__loading-spin'

const Button = props => {
	const type = props.type ? props.type : 'primary'
	const css = cn('x-button', {
		'x-button--disabled': props.disabled,
		'x-button--mini': props.mini,
	}, 'x-button--' + type, props.className)
	
	let children = props.children
	if (!Array.isArray(children)) {
		children = [children]
	}

	const domprops = {...props}
	delete domprops.type
	delete domprops.disabled
	delete domprops.mini
	delete domprops.className
	delete domprops.children
	delete domprops.loading
	delete domprops.onClick

	return (
		<a {...domprops} className={css} onClick={props.onClick}>
			{
				props.loading ?
				<div
					className="x-button__loading"
					dangerouslySetInnerHTML={{__html: loadingSpin}}
				/> :
				null
			}
			{
				children.map((res, i) => {
					if (typeof res !== 'object') {
						return <p key={i}>{res}</p>
					}
					return res
				})
			}
		</a>
	)
}

export default Button