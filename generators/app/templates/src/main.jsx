// import Perf from 'react-addons-perf'
// window.Perf = Perf


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// 全局store
import configureStore from 'src/redux/store'
const store = configureStore()

// 根路由容器
import Routers from 'src/routes'


// 挂载到根元素
render(
	<Provider store={ store }>
		<Routers />
	</Provider>,
	document.getElementById('root')
)
