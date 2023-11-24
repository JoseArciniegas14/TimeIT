const bcrypt = require("bcryptjs")
const User = require("../models/user.model")

async function register(req, res) {
  try {
    const { name, age, country, city, email, phone, password } = req.body;

    const emailLowerCase = email.toLowerCase();
    if (!password || !email || !phone) {
      return res.status(400).send({ msg: "Todos los campos son obligatorios" });
    }

    const user = new User({
      email: emailLowerCase,
      phone,
      name,
      country,
      city,
      age,
      active: true,
      role: "user"
    });

    // Hash de la contraseña
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    user.password = hashPassword;

    const userStore = await user.save();

    res.status(201).send(userStore);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Error al registrar el usuario" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ msg: "Todos los campos son obligatorios" });
    }

    const emailLowerCase = email.toLowerCase();

    const userStore = await User.findOne({ email: emailLowerCase });
    if (!userStore) {
      return res.status(400).send({ msg: "Usuario no encontrado" });
    }

    const check = await bcrypt.compare(password, userStore.password);
    if (!check) {
      return res.status(400).send({ msg: "Usuario o contraseña incorrecta" });
    }

    if (req.session.user) {
      delete req.session.user
    }

    req.session.user = {
      userId: userStore._id,
      email: userStore.email,
      userPhone: userStore.phone
    };

    res.status(200).send({ msg: "Inicio de sesion exitoso" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Error del servidor" });
  }
}


module.exports = {
  login,
  register,
}