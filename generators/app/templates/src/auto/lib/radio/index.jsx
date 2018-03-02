import './style'
import React from 'react'
import classnames from 'classnames'


const Radio = props => {
	const css = classnames('x-radio', {
		'x-radio__checked': props.checked
	}, props.className)
	return (
		<p className={css} onClick={props.onChange}>
			<i />
			{
				props.value ?
				<span>{props.value}</span> :
				null
			}
		</p>
	)
}

export default Radio