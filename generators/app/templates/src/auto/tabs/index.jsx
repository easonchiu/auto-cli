import './style'
import React, { cloneElement } from 'react'
import classnames from 'classnames'

const TabsItem = (props) => {
	const css = classnames('x-tabs__item', {
		'x-tabs--active': props.active
	}, props.className)

	return (
		<button className={css} style={props.style} onClick={() => props.onClick(props.id)}>
			{ props.children }
		</button>
	)
}

const Tabs = props => {
	const css = classnames('x-tabs', props.className)
	
	let activeOffset = -2
	const children = props.children.map((res, index) => {
		let act = res.key == props.active
		if (act) {
			activeOffset = index
		}
		return cloneElement(res, {
			active: act,
			id: res.key,
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