
export const storeUserInfo = (data) => {
  return Object.assign({}, data, { type: 'USERINFO' })
}
