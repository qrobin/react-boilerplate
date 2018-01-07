# QR boilerplate

A super cool boilerplate I've created for myself to simplify react app creation start. BTW will bbe happy if it will come in handy for someone else.

Check the info below how to use it.
 
**This boilerplate uses:**

|||
| --- | --- |
  [react](https://reactjs.org/)  | A library for painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. |
| [redux](https://redux.js.org/)  | A predictable state container for JavaScript apps.  |
| [redux&nbsp;saga](https://redux-saga.js.org/)  | A library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures.  |
| [redux&nbsp;logger](https://github.com/evgenyrodionov/redux-logger)  | Logger for Redux.  |
| [react&nbsp;router&nbsp;4](https://reacttraining.com/react-router/web/guides/philosophy)  | Declarative routing for React.  |
| [webpack&nbsp;3](https://webpack.js.org/)  |  A static module bundler for modern JavaScript applications.  |
| [eslint](https://eslint.org/)  |  The pluggable linting utility for JavaScript and JSX  |

---

### 1. Actions
Check the `src/utils/redux.js` file. You'll find there a small utility that creates action constants for you. Just ignore that file, it just works.
 
 There are two actions subdivisions in our app — **sync** and **async**. So, in `src/constants/asyncActions.js` you can find an `'EXAMPLE'` action type. Since it is an asynchronous action, it is automatically divided into 3 action types: 
 `'EXAMPLE_REQUEST', 'EXAMPLE_SUCCESS', 'EXAMPLE_FAILURE'`. The best way to manage that is to use `'EXAMPLE_REQUEST'` as a saga pointer, where you can make all your async actions, and depending on result of that actions you can call `'EXAMPLE_SUCCESS'` or `'EXAMPLE_FAILURE'` action, which is used as a reducer pointer to put data into your redux store.
 
 So if you need to create new async action, follow these steps:
 1. Create an action type [ACTION] in `src/constants/asyncActions.js`
 2. Create a saga in `src/sagas/[ACTION].js`, check the syntax in example saga. Use '[ACTION]_REQUEST' string as a pointer in saga's export. Inside saga make a http request, get youd data, modify it and `put()` into redux store with `'[ACTION]_SUCCESS'` type, or handle error with `'[ACTION]_FAILURE'` type.Don't forget to add your saga into `src/sagas/index.js`.
 3. Create a reducer in `src/reducers/[ACTION].js`. The main idea here is to put into store an untouched payload. All the logic, that modifies your data, should be in your saga. Don't forget to add your reducer into `src/reducers/index.js`.
 4. Dispatch an action with type `'[ACTION]_REQUEST'` in your component on some click event or wherever you need it to be dispatched.

Use *async* action to make http requests and other asynchronous operations, and *sync* actions to handle another actions.


