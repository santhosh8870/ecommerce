const mongoose = require("mongoose")

const productShema =  new mongoose.Schema({
    name : String,
    price : String,
    description : String,
    rating : String,
    images : [
        {image : String}
    ],
    category : String,
    seller : String,
    stock : String,
    createdAt : Date
})


const productModel = mongoose.model("product", productShema)

module.exports = productModel;