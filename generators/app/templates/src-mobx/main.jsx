import 'src/assets/css/reset'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, inject } from 'mobx-react'

// fastclick
import initReactFastclick from 'src/assets/libs/react-fastclick'
initReactFastclick()

// routes
import Routers from 'src/routes'

// render to #root
render(
	<Routers />,
	document.getElementById('root')
)
