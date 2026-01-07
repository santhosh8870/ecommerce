const express = require("express")
const { createUser, getAllUsers } = require("../controller/userController")
const Router = express.Router()

Router.route("/register").post(createUser)
Router.route("/login").post(getAllUsers)

module.exports = Router