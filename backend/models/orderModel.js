const mongoose = require("mongoose")

const orderShema =  new mongoose.Schema({
    cartItems : Array,
    amount : String,
    status : String,
    createdAt : Date
})


const orderModel = mongoose.model("order", orderShema)

module.exports = orderModel;