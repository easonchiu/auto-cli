import './style'
import React from 'react'

import Button from 'src/components/button'



const ListItem = ({text, button, click}) => {
	return (
		<div className="list-item">
			<Button text={ button } click={ click } />
		</div>
	)
}

const List = ({content}) => {
	return (
		<fieldset className="list">
			<legend>I am 'list' container</legend>
			{
				content.map((res, index) => <ListItem {...res} key={index} />)
			}
		</fieldset>
	)
}

export default List