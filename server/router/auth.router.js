const express = require("express")
const multiparty = require("connect-multiparty")
const AuthController = require("../controllers/auth.controller")

const multipart = multiparty()
const api = express.Router()

api.post("/auth/register", [multipart], AuthController.register)
api.post("/auth/login", [multipart], AuthController.login)

module.exports = api