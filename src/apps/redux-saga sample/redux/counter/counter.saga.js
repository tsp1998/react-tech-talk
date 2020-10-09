import { put, takeEvery, all, call } from 'redux-saga/effects'

function* workerIncr(action) {
  yield put({ type: 'INCR' })
}

function* watchIncr() {
  console.log('object')
  yield takeEvery('INCR', workerIncr)
}

export default function* counterSaga() {
  yield all([
    call(watchIncr),
  ])
}