// reset css
import 'src/assets/css/reset'

// some utils
import 'src/utils/inputEvents'
import 'src/utils/dateFormat'

// app reset
import 'src/utils/appReset'

// base framework
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// fastclick
import fastclick from 'fastclick'
fastclick.attach(document.body)

// store
import configureStore from 'src/redux/store'
const store = configureStore()

// routes
import Routers from 'src/routes'

// render to #root
render(
	<Provider store={store}>
		<Routers />
	</Provider>,
	document.getElementById('root')
)
