import { all, call } from 'redux-saga/effects'

import counterSaga from './counter/counter.saga'

export default function* rootSaga() {
  yield all([call(counterSaga)])
}