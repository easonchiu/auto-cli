import './style'
import React, { cloneElement } from 'react'
import classnames from 'classnames'

const CellRow = props => {
	const css = classnames('x-cell__row', props.className)
	return (
		<div className={css} style={props.style}
			onClick={()=>{props.onClick&&props.onClick(props.value)}}>
			{ props.children }
		</div>
	)
}


const Cell = props => {
	const css = classnames('x-cell', props.className)
	let children = props.children

	if (typeof props.onClick === 'function') {
		if (!Array.isArray(children)) {
			children = [children]
		}
		children = children.map(res => {
			return cloneElement(res, {
				value: res.props.value || res.key.replace(/^\.\$/g, ''),
				activeClassName: props.activeClassName || 'active',
				onClick: props.onClick
			})
		})
	}
	return (
		<section className={css}>
			{ children }
		</section>
	)
}

Cell.Row = CellRow

export default Cell