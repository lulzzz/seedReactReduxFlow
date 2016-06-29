
const userInfo = (state = {}, action) => {
  switch (action.type) {
    case 'USERINFO':
      delete action.type
      return Object.assign({}, state, action)
    default:
      return state
  }
}

export default userInfo
