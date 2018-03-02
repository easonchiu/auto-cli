
/**
 * 视图用的高阶组件
 *
 * 1. 连接redux
 * 2. render方法传入props与state
 * 3. this.search拿到浏览器地址中的?a=1&b=2参数，以对象形式返回
 * 4. this.params拿到this.props.match.params对象
 *
 */

import connect from 'src/redux/connect'
import qs from 'qs'

const VIEW = Comp => {
	@connect
	class VIEWComponent extends Comp {
		constructor(props) {
			super(props)
		}

		get search() {
			return this.props.location ? qs.parse(this.props.location.search.replace(/^\?/, '')) : {}
		}

		get params() {
			return this.props.match ? this.props.match.params : {}
		}

		render() {
			return super.render(this.props, this.state)
		}
	}
	return VIEWComponent
}

export default VIEW