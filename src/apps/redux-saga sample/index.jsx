import React from 'react'

import store from './redux/store'
import { Provider } from 'react-redux'

import Counter from './counter.component'

function index() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
    </div>
    </Provider>
  )
}

export default index
