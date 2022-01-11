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
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64'))
  } catch (error) {
    console.log(error)
    return {}
  }
}
