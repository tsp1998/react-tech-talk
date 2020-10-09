const { createStore, combineReducers } = require('redux');

console.log('--------------REDUX--------------')

// --------------- REDUCERS ----------------

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER': return state + action.payload;
    default: return state;
  }
}

function userReducer(state = { loggerdIn: false }, action) {
  switch (action.type) {
    case 'SET_LOGGED_IN': return { ...state, loggerdIn: true };
    default: return state;
  }
}

// -------------------ACTIONS -----------------

function incrementCounter(incrementBy = 1) {
  return { type: 'INCREMENT_COUNTER', payload: incrementBy }
}

function setLoggedIn() {
  return { type: 'SET_LOGGED_IN'}
}

// ------------------STORE---------------------

const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer
})

const store = createStore(allReducers);

console.log(store.getState())

store.dispatch(incrementCounter(10))
store.dispatch(incrementCounter(10))
store.dispatch(incrementCounter(10))

store.dispatch(setLoggedIn())

console.log(store.getState())

// export default store;