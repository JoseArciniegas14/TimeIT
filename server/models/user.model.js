const mongoose = require("mongoose")

// Lo que se mueva aqui se vera reflejado en la base de datos

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


module.exports = mongoose.model("User", UserSchema)