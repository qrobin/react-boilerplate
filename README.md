# QR boilerplate

A super cool boilerplate I've created for myself to simplify react app creation startup.

Check the info below how to use it.
 
**This boilerplate uses:**

|||
| --- | --- |
  [react](https://reactjs.org/)  | A library for interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. |
| [redux](https://redux.js.org/)  | A predictable state container for JavaScript apps.  |
| [redux&nbsp;saga](https://redux-saga.js.org/)  | A library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures.  |
| [redux&nbsp;logger](https://github.com/evgenyrodionov/redux-logger)  | Logger for Redux.  |
| [react&nbsp;router&nbsp;4](https://reacttraining.com/react-router/web/guides/philosophy)  | Declarative routing for React.  |
| [webpack&nbsp;3](https://webpack.js.org/)  |  A static module bundler for modern JavaScript applications.  |
| [eslint](https://eslint.org/)  |  The pluggable linting utility for JavaScript and JSX  |

---

### 1. Actions
Check the `src/utils/redux.js` file. You'll find there a small utility that creates action constants for you. Just ignore that file, it just works.
 
 There are two actions subdivisions in our app — **sync** and **async**. 
 
 #
 
 **Async actions**
 
 Inside `src/constants/asyncActions.js` you can find an `'USERS_GET'` action type. Since it is an asynchronous action, it is automatically divided into 3 action types: 
 `'USERS_GET_REQUEST', 'USERS_GET_SUCCESS', 'USERS_GET_FAILURE'`. The best way to manage that is to use `'USERS_GET_REQUEST'` as a saga pointer, where you can make all your async actions, and depending on result you can call `'USERS_GET_SUCCESS'` or `'USERS_GET_FAILURE'` action, which are used as a reducer pointer to put data into your redux store.
 
 Use *async* action to make http requests and other asynchronous operations

#

 **Sync actions**

These action type you can create in `src/constants/syncActions.js`. It stays as it is created. by default there is a `'LOADING'` action type that is switching while data is fetching from the server. Depending on that state we can show or hide spinner (or loading message).

---




