import { handleActions } from 'redux-actions'

let initialState = {
	name: 'initial store in redux/reducers/demo.js'
}

const $$demo = handleActions({
	DEMO_EMIT(state, action) {
		return Object.assign({}, state, action.payload)
	}
}, initialState)

export default $$demo