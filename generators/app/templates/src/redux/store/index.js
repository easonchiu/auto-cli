import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from 'src/redux/reducers'

const composedCreateStore = compose(
	applyMiddleware(thunk)
)(createStore)

const configureStore = (initialState = {}) => {
    return composedCreateStore(reducers, initialState)
}

export default configureStore