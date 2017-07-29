import styles from './style'
import React from 'react'
import mass from 'mass'

const Button = mass(({onClick, children, className}) => {
	return (
		<button
			className={className}
			styleName="button"
			onClick={ onClick }>
			{ children }
		</button>
	)
}, styles)

export default Button