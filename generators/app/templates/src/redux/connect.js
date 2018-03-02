import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actions from 'src/redux/actions'

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

export default Component => connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component)