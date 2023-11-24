const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: false
  },
  city: {
    type: String,
    required: true,
    trim: false
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: String,
  active: Boolean,
  avatar: String
})

// Dato interesante, quise usar objetos aqui, pero era mi primera vez usandolos que me generaron muchos errores
// Sobretodo con las solicitudes, pero esta vez en el modelo de alarmas voy a luchar por usar los objetos SI o SI XD 
module.exports = mongoose.model("User", UserSchema)