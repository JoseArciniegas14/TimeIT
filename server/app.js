const express = require('express')
const session = require('express-session');
const MongoStore = require("connect-mongo")
const bodyParser = require('body-parser')
const cors = require("cors")
const { DB_USER, DB_PASSWORD, DB_HOST, API_VERSION, SECRET_KEY } = require("./constants.js");

const app = express()

//importar rutas
const authRoutes = require("./router/auth.router")
const userRoutes = require("./router/user.router")
const alarmRoutes = require("./router/alarms.router.js")


// Sesion con express
app.use(session({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,
    ttl: 7 * 24 * 60 * 60,
  }),
}));

//Configurar body parse
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Configurar header http - Cors
app.use(cors())


//Configurar rutas
app.use(`/api/${API_VERSION}`, authRoutes)
app.use(`/api/${API_VERSION}`, userRoutes)
app.use(`/api/${API_VERSION}`, alarmRoutes)

module.exports = app