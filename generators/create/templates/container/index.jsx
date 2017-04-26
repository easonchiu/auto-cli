import './style'
import React from 'react'

const <%= upperName %> = ({children}) => {
	return (
		<div className="con-<%= name %>">
			{ '<%= name %> (container)' }
			{ children }
		</div>
	)
}

export default <%= upperName %>