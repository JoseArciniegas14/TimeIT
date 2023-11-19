const bcrypt = require("bcryptjs")
const User = require("../models/user.model")
const image = require("../utils/image")

async function getMe(req, res) {

  const { user_id } = req.user
  const response = await User.findById(user_id)

  if (!response) {
    res.status(400).send({ msg: "No se ha encontrado al usuario" })
  } else {
    res.status(200).send(response)
  }
}

async function getUsers(req, res) {
  const { active } = req.query

  let response = null

  if (active === undefined) {
    response = await User.find()
  } else {
    response = await User.find({ active })
  }
  res.status(200).send(response)
}

async function createUser(req, res) {

  const { name, age, password, country, city, email, phone } = req.body
  const user = new User({ name, age, region: { country, city }, contact: { email, phone }, active: true })

  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(password, salt)

  user.password = hashPassword
  if (req.files.avatar) {
    const imagePath = image.getFilePath(req.files.avatar)
    user.avatar = imagePath
  }

  user.save((error, userStored) => {
    if (error) {
      console.log(error);
      res.status(500).send({ msg: "Error al registrar el usuario" });
    } else {
      res.status(201).send({ msg: "Usuario registrado correctamente" });
    }
  });
}

async function updateUser(req, res) {
  const { id } = req.params
  const userData = req.body

  // updatePass
  if (userData.password) {
    // agregar una verificacion antes de la actualizacion
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(userData.password, salt)
    userData.password = hashPassword
  } else {
    delete userData.password
  }
  // update Objects
  if (userData.email) {
    userData['contact.email'] = userData.email;
    delete userData.email;
  }
  if (userData.phone) {
    userData['contact.phone'] = userData.phone;
    delete userData.phone;
  }
  if (userData.country) {
    userData['region.email'] = userData.country;
    delete userData.country;
  }
  if (userData.city) {
    userData['region.city'] = userData.city;
    delete userData.city;
  }

  // updateImg
  if (req.files.avatar) {
    // Eliminar el archivo anterior??
    const imagePath = image.getFilePath(req.files.avatar)
    userData.avatar = imagePath
  }

  User.findByIdAndUpdate({ _id: id }, userData, { new: true }, (error, updatedUser) => {
    if (error) {
      console.log(error);
      res.status(500).send({ msg: "Error al actualizar el usuario" });
    } else {
      res.status(201).send({ msg: "Datos de usuario actualizados" });
    }
  });
}

async function deteteUser(req, res) {
  const { id } = req.params

  User.findByIdAndDelete(id, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send({ msg: "Error al eliminar el usuario" });
    } else {
      res.status(201).send({ msg: "Usuario eliminado" });
    }
  })
}

module.exports = {
  getMe,
  getUsers,
  createUser,
  updateUser,
  deteteUser,
}