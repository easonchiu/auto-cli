import styles from './style'
import React from 'react'
import mass from 'mass'

const Button = mass(({resource}) => {
	if (resource.length == 0) {
		return <ul styleName="list"><li>Empty</li></ul>
	}

	return (
		<ul styleName="list">
			{
				resource.map(res => <li key={'_list_'+res}>id: {res}</li>)
			}
		</ul>
	)
}, styles)

export default Button