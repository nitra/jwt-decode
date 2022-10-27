/**
 * JWT Decode
 *
 * @param {String} token token
 * @return {{}} decoded token
 */
function def(token) {
  if (!token) {
    return {}
  }
  try {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64url'))
  } catch (error) {
    return {}
  }
}

export default def
