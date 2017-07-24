import styles from './style'
import React from 'react'
import mass from 'mass'


const <%= upperName %> = mass(({children}) => {
	return (
		<div styleName="con-<%= name %>">
			{ '<%= name %> (container)' }
			{ children }
		</div>
	)
}, styles)

export default <%= upperName %>