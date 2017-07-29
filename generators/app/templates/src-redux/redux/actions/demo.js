import { createAction } from 'redux-actions'

const pop = createAction('DEMO_POP')
const push = createAction('DEMO_PUSH')
const clear = createAction('DEMO_CLEAR')

export default {
	pop,
	push,
	clear
}