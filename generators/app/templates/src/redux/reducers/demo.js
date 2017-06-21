import { handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'

let initialState = Immutable({
	name: 'initial store in redux/reducers/demo.js'
})

const $$demo = handleActions({
	DEMO_EMIT(state, action) {
		return Immutable.merge(state, action.payload)
	}
}, initialState)

export default $$demo