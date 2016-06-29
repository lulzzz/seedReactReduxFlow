const storeUserInfo = (data) => {
  return Object.assign({}, data, { type: 'USERINFO' })
}

export default storeUserInfo
