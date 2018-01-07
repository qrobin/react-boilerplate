import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { users } from './users'
import { loading } from './loading'

export default combineReducers({
  users,
  loading,
  routing: routerReducer // leave it here
})