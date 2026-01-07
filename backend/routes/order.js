const express = require("express")
const { createOrder } = require("../controller/orderController")
const Router = express.Router()

Router.route("/order").post(createOrder)

module.exports = Router