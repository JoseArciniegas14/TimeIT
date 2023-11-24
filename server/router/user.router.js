const express = require("express")
const multiparty = require("connect-multiparty")
const UserController = require("../controllers/user.controller.js")
const md_auth = require("../middlewares/authenticated.js")

// const md_upload = multiparty({ uploadDir: "./uploads/avatar" }) IBA A SUBIR FOTOS DE PERFIL PERO ME ESTOY ENREDANDO MUCHO
const api = express.Router()

api.get("/user/getme", [md_auth.ensureAuthenticated], UserController.getMe)
api.post("/user/logout", [md_auth.ensureAuthenticated], UserController.logoutUser)
api.patch("/user/:id/update", [md_auth.ensureAuthenticated, /*md_upload*/], UserController.updateUser)
api.delete("/user/:id/delete", [md_auth.ensureAuthenticated], UserController.deleteUser)


module.exports = api