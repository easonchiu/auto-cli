import React from 'react'
import $demo from './demo'

const states = {
	$demo
}

export default Comp => props => {
	return <Comp {...props} {...states} />
}

