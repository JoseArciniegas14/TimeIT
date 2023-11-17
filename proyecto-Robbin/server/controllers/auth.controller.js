const bcrypt = require("bcryptjs")
const User = require("../models/user.model")
const jwt = require("../utils/jwt")


function register(req, res) {
  const { name, age, region, contact: { email, phone }, password } = req.body

  if (!email) res.status(400).send({ msg: "El correo es obligatorio" })
  if (!password) res.status(400).send({ msg: "La contraseña es obligatoria" })

  const user = new User({
    name,
    age,
    region,
    contact: {
      email: email.toLowerCase(),
      phone,
    },
    role: "User",
    active: false
  })

  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(password, salt)

  user.password = hashPassword

  user.save((error, userStorage) => {
    if (error) {
      res.status(400).send({ msg: "Error al registrar el usuario" })
    } else {
      res.status(200).send(userStorage)
    }
  })
}

function login(req, res) {
  const { password, email } = req.body

  if (!email) res.status(400).send({ msg: "El correo es obligatorio" })
  if (!password) res.status(400).send({ msg: "La contraseña es obligatoria" })

  const emailLowerCase = email.toLowerCase()

  User.findOne({ email: emailLowerCase }, (error, userStorage) => {
    if (error) {
      res.status(500).send({ msg: "Error del servidor" })
    } else {
      bcrypt.compare(password, userStorage.password, (bcryptError, check) => {
        if (bcryptError) {
          res.status(500).send({ msg: "Error del servidor" })
        } else if (!check) {
          res.status(400).send({ msg: "Usuario o contraseña incorrecta" })
        } else if (!userStorage.active) {
          res.status(401).send({ msg: "Usuario no activo" })
        } else {
          res.status(200).send({
            access: jwt.createAccessToken(userStorage),
            refresh: jwt.createRefreshToken(userStorage)
          })
        }
      })
    }
  })
}

function refreshAccessToken(req, res) {
  const { token } = req.body

  if (!token) res.status(400).send({ msg: "Error token requerido" })

  const { user_id } = jwt.decoded(token)

  User.findOne({ _id: user_id }, (error, userStorage) => {
    if (error) {
      res.status(500).send({ msg: "Error del servidor" })
    } else {
      res.status(200).send({
        accessToken: jwt.createAccessToken(userStorage)
      })
    }
  })
}

module.exports = {
  register,
  login,
  refreshAccessToken
}