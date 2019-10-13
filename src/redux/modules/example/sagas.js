import { takeLatest, put, all } from 'redux-saga/effects'

import { exampleSuccess, exampleFailure } from './actions'

export function* request({ payload }) {
  const { firstNumber, secondNumber } = payload

  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    yield put(exampleFailure())
    return
  }

  const result = firstNumber + secondNumber

  yield put(exampleSuccess({ result }))
}

export default all([takeLatest('@example/EXAMPLE_REQUEST', request)])
