const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const { API_VERSION } = require('./constants.js')

const app = express()

//importar rutas
const authRoutes = require("./router/auth.router")
const userRoutes = require("./router/user.router")

//Configurar body parse
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Configurar header http - Cors
app.use(cors())

//Configurar rutas
app.use(`/api/${API_VERSION}`, authRoutes)
app.use(`/api/${API_VERSION}`, userRoutes)

module.exports = app