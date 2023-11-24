const express = require("express")
const md_auth = require("../middlewares/authenticated.js")
const limiter = require("../middlewares/limiter.js")
const AlarmController = require("../controllers/alarms.controller.js")


const api = express.Router()

api.post("/alarms/create", [md_auth.ensureAuthenticated, limiter.userRateLimit], AlarmController.createAlarm)
api.post("/alarms/delete", [md_auth.ensureAuthenticated, limiter.userRateLimit], AlarmController.deleteAlarms)




module.exports = api