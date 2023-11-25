const bcrypt = require("bcryptjs")
const User = require("../models/user.model")


async function getMe(req, res) {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ msg: "Usuario no encontrado" });
    }

    res.status(200).send({ user });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).send({ msg: "Error del servidor" });
  }
}

async function updateUser(req, res) {
  const userId = req.user.userId;
  const userData = req.body

  // updateEmail
  if (userData.email) {
    // DATO IMPORTANTE: $ne es una variable que significa Not_equal, y sirve como parametro en una busqueda
    const usedEmail = await User.findOne({ email: userData.email, _id: { $ne: userId } });
    if (usedEmail) {
      return res.status(400).send({ msg: "El correo ya esta en uso por otro usuario" });
    }
  }

  // updatePhone
  if (userData.phone) {
    const usedPhone = await User.findOne({ phone: userData.phone, _id: { $ne: userId } });
    if (usedPhone) {
      return res.status(400).send({ msg: "El numero de telefono ya esta en uso por otro usuario" });
    }
  }

  // updatePass
  if (userData.password) {

    // agregar una verificacion antes de la actualizacion con una current password ++++++++++++++++++++++++++++++++++++++++++++++
    // if (!currentPassword) {
    //   return res.status(400).send({ msg: 'Debes proporcionar la contraseña actual' });
    // }
    // const user = await User.findById(userId);
    // const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    // if (!isPasswordValid) {
    //   return res.status(401).send({ msg: 'La contraseña actual no es válida' });
    // }

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(userData.password, salt)
    userData.password = hashPassword
  } else {
    delete userData.password
  }

  User.findByIdAndUpdate({ _id: userId }, userData, { new: true }, (error, updatedUser) => {
    if (error) {
      console.log(error);
      res.status(500).send({ msg: "Error al actualizar el usuario" });
    } else {
      res.status(201).send({ msg: "usuario actualizado con exito", updatedUser });
    }
  });
}

function logoutUser(req, res) {

  for (const key in req.body) {
    delete req.body[key];
  }
  for (const key in req.user) {
    delete req.user[key];
  }
  // Destruir la sesion
  req.session.destroy((error) => {
    if (error) {
      console.error("Error al cerrar sesion:");
      res.status(500).send({ msg: "Error al cerrar sesion" });
    } else {
      res.status(200).send({ msg: "Sesión cerrada exitosamente" });
    }
  });
}


async function deleteUser(req, res) {
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
  updateUser,
  logoutUser,
  deleteUser,
}