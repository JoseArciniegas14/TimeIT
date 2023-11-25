const express = require("express")
const limiter = require("../middlewares/limiter.js")
const md_auth = require("../middlewares/authenticated.js")
const AlarmController = require("../controllers/alarms.controller.js")


const api = express.Router()

api.post("/alarms/create", [md_auth.ensureAuthenticated, limiter.userRateLimit], AlarmController.createAlarm)
api.delete("/alarms/delete", [md_auth.ensureAuthenticated, limiter.userRateLimit], AlarmController.deleteAlarms)
api.patch("/alarms/update", [md_auth.ensureAuthenticated, limiter.userRateLimit], AlarmController.updateAlarm)




module.exports = api