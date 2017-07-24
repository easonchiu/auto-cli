import { createAction } from 'redux-actions'

const emit = createAction('DEMO_EMIT')


const delay = (delay = 2000) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, delay)
	})
}

const anyncEmit = payload => async (dispatch, getState) => {

	await delay(2000)

	dispatch(emit(payload))
}

export default {
	emit,
	anyncEmit
}