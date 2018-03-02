import './style'
import React, { cloneElement } from 'react'
import classnames from 'classnames'

const CellRow = props => {
	const css = classnames('x-cell__row', {
		'x-cell--activeable': props.onClick || props.activeable
	}, props.className)

	const domprops = {...props}
	delete domprops.activeable
	delete domprops.onClick
	delete domprops.value
	delete domprops.label

	return (
		<div
			{...domprops}
			className={css}
			onClick={e => props.onClick !== undefined && props.onClick(props.value)}
		>
			{
				props.label && typeof(props.label) === 'string' ?
				<label>{props.label}</label> :
				null
			}
			{ props.children }
		</div>
	)
}


const Cell = props => {
	const css = classnames('x-cell', props.className, {
		'x-cell--indent-line': props.indentLine
	})
	let children = props.children

	if (typeof props.onClick === 'function') {
		if (!Array.isArray(children)) {
			children = [children]
		}
		children = children.map((res, index) => {
			return cloneElement(res, {
				value: res.props.value || '',
				key: index,
				onClick: props.onClick
			})
		})
	}

	const domprops = {...props}
	delete domprops.indentLine
	delete domprops.onClick

	return (
		<section {...domprops} className={css}>
			{ children }
		</section>
	)
}

Cell.Row = CellRow

export default Cell