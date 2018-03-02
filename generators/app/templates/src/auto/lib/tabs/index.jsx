import './style'
import React, { cloneElement } from 'react'
import classnames from 'classnames'

const TabsItem = (props) => {
	const css = classnames('x-tabs__item', {
		'x-tabs--active': props.active
	}, props.className)

	return (
		<a href="javascript:;" className={css} style={props.style} onClick={() => props.onClick(props.value)}>
			{ props.children }
		</a>
	)
}

const Tabs = props => {
	const css = classnames('x-tabs', props.className)
	
	let activeOffset = -2
	const children = props.children.map((res, index) => {
		let act = res.props.value == props.active
		if (act) {
			activeOffset = index
		}
		return cloneElement(res, {
			active: act,
			key: index,
			value: res.props.value,
			onClick: props.onClick
		})
	})
	const len = children.length

	return (
		<div className={css}>
			<sub className="x-tabs__line" style={{width: 100 / len + '%', 'WebkitTransform': 'translate(' + activeOffset * 100 + '%,0)'}} />
			{ children }
		</div>
	)
}

Tabs.Item = TabsItem
export default Tabs