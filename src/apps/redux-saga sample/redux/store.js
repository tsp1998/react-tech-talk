import rootReducer from './root.reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.saga'
const { createStore, applyMiddleware } = require('redux');

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

export default store;