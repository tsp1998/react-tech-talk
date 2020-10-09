import { createStore } from 'redux'
//TODO applyMiddleware

import rootReducer from './root.reducer'

const store = createStore(rootReducer);

export default store;