import { combineReducers } from 'redux'

import $$demo from './demo'

let reducers = {
	$$demo,
}

export default combineReducers({
	...reducers
})