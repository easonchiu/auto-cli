import './style'
import React from 'react'
import classnames from 'classnames'

const PanelItem = props => {
	const css = classnames('x-panel__item', {

	}, props.className)
	return (
		<div className={css} style={props.style} onClick={props.onClick}>
			{ props.children }
		</div>
	)
}

const Panel = props => {
	const css = classnames('x-panel', {

	}, props.className)
	return (
		<div className={css}>
			{ props.children }
		</div>
	)
}

Panel.Item = PanelItem
export default Panel