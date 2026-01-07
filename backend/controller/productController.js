const productModel = require("../models/productModel")

exports.getProducts = async (req, res)=>{

    const products = await productModel.find({})

    res.json(
        {
            success : true,
            products
        }
    )
}
exports.getSingleProduct = async (req, res)=>{
    console.log(req.params.id)
    const product = await productModel.findById(req.params.id)
    try{
        res.json(
            {
                success : true,
                product
            }
        )
    }
    catch(err){
        res.json(
            {
                success : false,
                message : "Ivalid-Product"
            }
        )
    }
    
}