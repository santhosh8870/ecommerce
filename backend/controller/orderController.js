const orderModel = require("../models/orderModel")

exports.createOrder = async (req, res)=>{

    const cartItems = req.body
    const amount = Number(cartItems.reduce((pre, cur)=> ( pre + cur.product.price * cur.qty ),0).toFixed(2))
    const status = "pending"
    const order = await orderModel.create({cartItems, amount, status})

    res.json(
        {
            success : true,
            order
        }
    )
}
