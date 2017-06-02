import styles from './style'
import React from 'react'
import mass from 'src/assets/libs/mass'


import Button from 'src/components/button'


const ListItem = mass(({text, button, click}) => {
	return (
		<div styleName="info">
			<Button text={ button } click={ click } />
		</div>
	)
}, styles)

const List = mass(({content}) => {
	return (
		<fieldset styleName="list">
			<legend>I am 'list' container</legend>
			{
				content.map((res, index) => <ListItem {...res} key={index} />)
			}
		</fieldset>
	)
}, styles)

export default List