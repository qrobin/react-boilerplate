// import 'styles/utils/reset.css'
// import 'styles/utils/normalize.css'
import 'styles/main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import store, { history } from 'store'

import {
  Home,
  Users,
  NotFound
} from './containers'

const Test = (props) => (
  <div><h1>Test route here</h1></div>
)

const Root = () => (
  <Provider store={ store }>
    <Router history={ history }>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/users' component={ Users }/>
        <Route path='*' component={ NotFound }/>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
