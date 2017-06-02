import styles from './style'
import React from 'react'
import mass from 'src/assets/libs/mass'

const <%= upperName %> = mass(props => {
	return (
		<div styleName="comp-<%= name %>">
			{ '<%= name %> (component)' }
		</div>
	)
}, styles)

export default <%= upperName %>