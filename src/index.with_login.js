// // import 'styles/utils/reset.css'
// // import 'styles/utils/normalize.css'
// import 'styles/main.css'
//
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { App } from 'components/App'
// import { Provider } from 'react-redux'
// import { Router, Route, Switch, Redirect } from 'react-router-dom'
// import store, { history } from 'store'
//
// import {
//   Sidebar,
//   Orders,
//   Structure,
//   Login
// } from 'components'
//
// const Test = (props) => (
//   <div><h1>Test route here</h1></div>
// )
//
// const loggedIn = () => {
//   //   return store.getState().loggedIn
//   return true
// }
//
// history.push(loggedIn() ? '/orders' : '/login')
//
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     { ...rest }
//     render={ props => {
//       return (
//         loggedIn() ? <Component { ...props } /> : <Redirect to='/login' />
//       ) } } />
// )
//
// const PublicRoute = ({ component: Component, ...rest }) => (
//   <Route
//     { ...rest }
//     render={ props => loggedIn() ? <Redirect to='/orders' /> : <Component { ...props } /> } />
// )
//
// const Root = () => (
//   <Provider store={ store }>
//     <Router history={ history }>
//       <div className='container-fluid'>
//         <div className='row'>
//           { loggedIn() && <Sidebar /> }
//           <div>
//             { /* <Redirect exact from='/' to='/orders' /> */ }
//             <PublicRoute path='/login' component={ Login } />
//             <PrivateRoute path='/orders' component={ Orders } />
//             <PrivateRoute path='/access' component={ () => <h1>access</h1> } />
//             <PrivateRoute path='/structure' component={ Structure } />
//             <PrivateRoute path='/finance' component={ () => <h1>finance</h1> } />
//           </div>
//         </div>
//       </div>
//     </Router>
//   </Provider>
// )
//
// ReactDOM.render(<Root />, document.getElementById('root'))
