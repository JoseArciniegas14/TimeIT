// Creacion de tokes de Hector 
// (No se han usado aun, porque me toco cambiar el metodo del middleware, ya que me generaba errores al tener distintos users)

const jwt = require("jsonwebtoken")
const { JWT_SECRET_KEY } = require("../constants")

function createAccessToken(user) {
  const expirationToken = new Date()
  expirationToken.setHours(expirationToken.getHours() + 3)

  const payLoad = {
    token_type: "access",
    userId: user._id,
    iat: Date.now(),
    exp: expirationToken.getTime()
  }

  return jwt.sign(payLoad, JWT_SECRET_KEY)
}

function createRefreshToken(user) {
  const expirationToken = new Date()
  expirationToken.setMonth(expirationToken.getMonth() + 1)

  const payLoad = {
    token_type: "refresh",
    userId: user._id,
    iat: Date.now(),
    exp: expirationToken.getTime()
  }

  return jwt.sign(payLoad, JWT_SECRET_KEY)
}
function decoded(token) {
  return jwt.decode(token, JWT_SECRET_KEY, true)
}

module.exports = {
  createAccessToken,
  createRefreshToken,
  decoded,
}