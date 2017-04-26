import { handleActions } from 'redux-actions'

let initialState = {
	reducerName: '<%= name %>'
}

const <%= name %> = handleActions({
	<%= upperName %>_DEMO_EMIT(state, action) {
		return Object.assign({}, state, action.payload)
	}
}, initialState)

export default <%= name %>