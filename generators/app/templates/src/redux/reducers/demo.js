import { handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	list: [0, 1, 2]
})

export default handleActions({
	DEMO_POP (state, action) {
		const list = Immutable.asMutable(state.list)
		list.pop()

		return Immutable.merge(state, {
			list
		})
	},
	DEMO_PUSH (state, action) {
		const length = state.list.length

		const list = Immutable.asMutable(state.list)
		list.push(length)

		return Immutable.merge(state, {
			list
		})
	},
	DEMO_CLEAR (state, action) {
		return Immutable.merge(state, {
			list: []
		})
	},
	DEMO_ASYNC_FETCH (state, action) {
		// 异步处理结果
	}
}, initialState)