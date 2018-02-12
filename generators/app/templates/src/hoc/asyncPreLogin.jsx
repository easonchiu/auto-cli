
// 前置登录组件
// 多数情况下，用于套Provider组件，在main.jsx内
// 使用方式：
// import AsyncPreLogin from 'src/hoc/asyncPreLogin'
// AsyncPreLogin(
// 	  <Provider store={store}>
//		  <Routers />
//	  </Provider>
// )

import React, { PureComponent } from 'react'
import { initToken, toLogin } from 'src/utils/token'

const AsyncPreLogin = Compnent => {
	class Comp extends PureComponent {
		constructor(props) {
			super(props)

			this.state = {
				done: false
			}
		}

		async componentDidMount() {
			try {
				await initToken()
				this.setState({
					done: true
				})
			}
			catch (e) {
				toLogin()
			}
		}

		render() {
			if (!this.state.done) {
				return null
			}
			return Compnent
		}
	}
	
	return <Comp />
}

export default AsyncPreLogin