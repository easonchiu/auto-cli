import './style'
import React from 'react'

const Button = ({resource}) => {
	if (resource.length == 0) {
		return <ul className="list"><li>Empty</li></ul>
	}

	return (
		<ul className="list">
			{
				resource.map(res => <li key={'_list_'+res}>id: {res}</li>)
			}
		</ul>
	)
}

export default Button