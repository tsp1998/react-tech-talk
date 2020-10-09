import React from 'react'

import store from './redux/store'
import { Provider } from 'react-redux'

import Todo from './Todo'

function index() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <Todo />
      </div>
    </Provider>
  )
}

export default index
