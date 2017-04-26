import './style'
import React from 'react'

const Button = ({click, text}) => {
	return (
		<fieldset className="button-comp">
			<legend>I am 'button' component</legend>
			<button
				className="button"
				onClick={ click.bind(this, text) }>
				{ text }
			</button>
		</fieldset>
	)
}

export default Button