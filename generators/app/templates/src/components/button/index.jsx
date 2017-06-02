import styles from './style'
import React from 'react'
import mass from 'src/assets/libs/mass'

const Button = mass(({click, text}) => {
	return (
		<fieldset styleName="button-comp">
			<legend>I am 'button' component</legend>
			<button
				styleName="button"
				onClick={ click.bind(this, text) }>
				{ text }
			</button>
		</fieldset>
	)
}, styles)

export default Button