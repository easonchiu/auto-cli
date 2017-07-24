import { handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	reducerName: '<%= name %>'
})

const <%= name %> = handleActions({
	<%= upperName %>_DEMO_EMIT(state, action) {
		return Immutable.merge(state, action.payload)
	}
}, initialState)

export default <%= name %>