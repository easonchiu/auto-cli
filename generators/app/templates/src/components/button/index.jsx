import styles from './style'
import React from 'react'
import cn from 'classnames'

const Button = ({onClick, children, className}) => {
	return (
		<button
			className={cn('button', className)}
			onClick={onClick}>
			{children}
		</button>
	)
}

export default Button