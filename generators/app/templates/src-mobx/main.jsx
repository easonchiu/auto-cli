import 'src/assets/styles/reset'

import React, { Component } from 'react'
import { render } from 'react-dom'

// fastclick
import initReactFastclick from 'react-fastclick'
initReactFastclick()

// routes
import Routers from 'src/routes'

// render to #root
render(
	<Routers />,
	document.getElementById('root')
)
