const express = require("express")
const AuthController = require("../controllers/auth.controller")

const multiparty = require("connect-multiparty")
const multipart = multiparty()
const api = express.Router()

api.post("/auth/register", [multipart], AuthController.register)
api.post("/auth/login", [multipart], AuthController.login)

module.exports = api