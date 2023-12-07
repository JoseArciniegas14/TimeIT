const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const Alarm = require("../models/alarms.model");
const Habit = require("../models/habits.model");
const Note = require("../models/notes.model");

async function getMe(req, res) {
  try {
    const actualId = req.session.user.userId;
    const user = await User.findById(actualId);

    if (!user) {
      return res.status(404).send({ msg: "Usuario no encontrado" });
    }

    const filteredUser = {
      _id: user._id,
      name: user.name,
      age: user.age,
      country: user.country,
      city: user.city,
      email: user.email,
      phone: user.phone,
      password: user.password,
    };

    res.status(200).json(filteredUser);
  } catch (error) {
    res.status(500).send({ msg: "Error del servidor desde el GETME" });
    console.log(error);
  }
}

async function updateUser(req, res) {
  try {
    const userId = req.user.userId;
    const userData = req.body;

    // updateEmail
    if (userData.email) {
      const usedEmail = await User.findOne({
        email: userData.email,
        _id: { $ne: userId },
      });
      if (usedEmail) {
        return res
          .status(400)
          .send({ msg: "El correo ya está en uso por otro usuario" });
      }
    }

    // updatePhone
    if (userData.phone) {
      const usedPhone = await User.findOne({
        phone: userData.phone,
        _id: { $ne: userId },
      });
      if (usedPhone) {
        return res.status(400).send({
          msg: "El número de teléfono ya está en uso por otro usuario",
        });
      }
    }

    // updatePass
    if (userData.password) {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(userData.password, salt);
      userData.password = hashPassword;
    } else {
      delete userData.password;
    }

    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      userData,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send({ msg: "Usuario no encontrado" });
    }

    const filteredInfo = {
      userId,
      name: userData.name,
      age: userData.age,
      country: userData.country,
      city: userData.city,
      email: userData.email,
      phone: userData.phone,
    };

    res.status(201).json(filteredInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Error al actualizar el usuario" });
  }
}

function logoutUser(req, res) {
  console.log("sesion", req.session.user);
  for (const key in req.body) {
    delete req.body[key];
  }
  for (const key in req.user) {
    delete req.user[key];
  }
  // Destruir la sesion
  req.session.destroy((error) => {
    if (error) {
      res.status(500).send({ msg: "Error al cerrar sesion" });
    } else {
      res.status(200).send({ msg: "Sesión cerrada exitosamente" });
    }
  });
}

async function deleteUser(req, res) {
  const userId = req.user.userId;

  try {
    await User.findByIdAndDelete(userId);

    // Eliminar todas las alarmas relacionadas con el usuario
    await Alarm.deleteMany({ userid: userId });
    await Note.deleteMany({ userid: userId });
    await Habit.deleteMany({ userid: userId });

    req.session.destroy((error) => {
      if (error) {
        res.status(500).send({ msg: "Error al cerrar sesion" });
      }
    });

    res.status(201).send({
      msg: "Usuario eliminado de la base de datos junto a su informacion",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ msg: "Error al eliminar usuario de la base de datos" });
  }
}

module.exports = {
  getMe,
  updateUser,
  logoutUser,
  deleteUser,
};
