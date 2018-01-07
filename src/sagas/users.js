import { call, put, takeLatest } from 'redux-saga/effects'
import Axios from 'axios'

function* _users(action) {
  // Dispatch loading action (activates spinner while data is commencing)
  yield put({
    type:    'LOADING',
    payload: true
  })

  // Get data from your API
  const response = yield call(Axios.get, 'https://reqres.in/api/users')

  // Check your response
  if (response.status === 200) {
    const { data } = response

    // Put your data into redux store
    yield put({
      type:    'USERS_GET_SUCCESS',
      payload: data.data
    })

    // Or handle error
  } else {
    put({
      type: 'USERS_GET_FAILURE'
    })
  }

  // Loading finished, remove spinner
  yield put({
    type:    'LOADING',
    payload: false
  })
}

export const users = () => takeLatest('USERS_GET_REQUEST', _users)