/**
 * JWT Decode
 *
 * @param {String} token token
 * @returns {Object} decoded token
 */
export default token => {
  if (!token) {
    return {}
  }
  try {
    return JSON.parse(window.atob(token.split('.')[1]))
  } catch (error) {
    return {}
  }
}
