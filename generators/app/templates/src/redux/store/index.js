import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from 'src/redux/reducers'

const composedCreateStore = compose(
	applyMiddleware(thunk)
)(createStore)

const configureStore = (initialState = {}) => {
	const store = composedCreateStore(reducers, initialState)
	return store
}

export default configureStore