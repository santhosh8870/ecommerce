const express = require("express")
const { getProducts, getSingleProduct } = require("../controller/productController")
const Router = express.Router()

Router.route("/products").get(getProducts)
Router.route("/product/:id").get(getSingleProduct)

module.exports = Router