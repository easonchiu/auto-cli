import { handleActions } from 'easy-action'

const initialState = {
	list: [0, 1, 2]
}

export default handleActions({
	// 减一项
	DEMO_POP (state, action) {
		const list = [...state.list]
		list.pop()

		return {
			...state,
			list
		}
	},
	// 加一项
	DEMO_PUSH (state, action) {
        const list = [...state.list]
        list.push(list.length)

        return {
            ...state,
            list
   		}
	},
	// 清空
	DEMO_CLEAR (state, action) {
        return {
            ...state,
            list: []
    	}
	},
    // 异步处理结果
	DEMO_ASYNC_PUSH (state, action) {
        const list = [...state.list]
        list.push(list.length)

        return {
            ...state,
            list
    	}
	}
}, initialState)