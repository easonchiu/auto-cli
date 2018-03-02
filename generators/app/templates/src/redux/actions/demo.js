import { createAction } from 'easy-action'
import http from 'src/utils/http'

const pop = createAction('DEMO_POP')
const push = createAction('DEMO_PUSH')
const clear = createAction('DEMO_CLEAR')

// 异步处理
const _asyncPush = createAction('DEMO_ASYNC_PUSH')

const asyncPush = (payload = {}) => async (dispatch, getState) => {
	await new Promise(resolve => setTimeout(resolve, 500))
	dispatch(_asyncPush())
}


export default {
    asyncPush,
    pop,
	push,
	clear
}