/**
 * 前置登录组件
 * 若拿不到本地token的话，app会跳到原生登录页面，h5会转到通用登录模块
 * app中，如果有登录，会取到app的本地token存到浏览器缓存
 * 具体本地token的操作，使用utils目录内的token.js
 *
 * 使用方式：
 * 多数情况下，用于套Provider组件，在main.jsx内
 *
 * import AsyncPreLogin from 'src/hoc/asyncPreLogin'
 * AsyncPreLogin(
 *     <Provider store={store}>
 *         <Routers />
 *     </Provider>
 * )
 *
 */

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