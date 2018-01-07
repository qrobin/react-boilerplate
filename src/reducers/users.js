const users = (state = [], action) => {
  switch (action.type) {
    case 'USERS_GET_SUCCESS':
      return action.payload
    case 'USERS_GET_FAILURE':
      alert('Couldn\'t get users list' )
      return state
    default:
      return state
  }
}

export { users }