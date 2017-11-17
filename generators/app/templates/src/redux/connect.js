import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from 'src/redux/actions/'

export default Component => {

	const mapStateToProps = state => {
		return {
			...state
		}
	}

	const mapDispatchToProps = dispatch => {
		let list = {}
		for (let i in actions) {
			list[i] = bindActionCreators(actions[i], dispatch)
		}
		return list
	}

	return connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Component)
	
}