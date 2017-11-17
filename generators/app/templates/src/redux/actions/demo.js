import { createAction } from 'redux-actions'
import http from '$assets/libs/http'

const pop = createAction('DEMO_POP')
const push = createAction('DEMO_PUSH')
const clear = createAction('DEMO_CLEAR')


// 异步处理
const _asyncFetch = createAction('DEMO_ASYNC_FETCH')
const asyncFetch = (payload = {}) => async (dispatch, getState) => {
	const res = http.request({
		method: 'get',
		url: '/get/list',
		params: payload
	})
	dispatch(_asyncFetch(res))
}


export default {
	pop,
	push,
	clear,
	asyncFetch
}