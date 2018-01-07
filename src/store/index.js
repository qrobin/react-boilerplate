import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import rootReducer from '../reducers'

export const history = createHistory()

const loggerMiddleware = createLogger()
const middleware = routerMiddleware(history)

const store = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(loggerMiddleware, middleware, sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  syncHistoryWithStore(history, store)
  return store
}

export default store()
