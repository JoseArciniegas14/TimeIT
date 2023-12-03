const bcrypt = require("bcryptjs")
const User = require("../models/user.model");
const { getMe } = require("./UserController");

async function register(req, res) {
  try {
    const { name, age, country, city, email, phone, password } = req.body;

    const emailLowerCase = email.toLowerCase();
    if (!password || !email || !phone) {
      return res.status(400).send({ msg: "Todos los campos son obligatorios" });
    }

    if (email) {
      // DATO IMPORTANTE: $ne es una variable que significa Not_equal, y sirve como parametro en una busqueda
      const usedEmail = await User.findOne({ email: emailLowerCase, _id: { $ne: User._id } });
      if (usedEmail) {
        return res.status(400).send({ msg: "El correo ya esta en uso por otro usuario" });
      }
    }

    if (phone) {
      const usedPhone = await User.findOne({ phone: phone, _id: { $ne: User._id } });
      if (usedPhone) {
        return res.status(400).send({ msg: "El numero de telefono ya esta en uso por otro usuario" });
      }
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

    res.status(201).send({ msg: "Usuario registrado con exito" });
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

    // Crear sesion para manejar multiples usuarios (Mi mayor win y orgullo XD)
    req.session.user = {
      userId: userStore._id,
      email: userStore.email,
      userPhone: userStore.phone
    };

    await getMe(req, res)
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Error del servidor desde el AUTH" });
  }
}

module.exports = {
  login,
  register,
}