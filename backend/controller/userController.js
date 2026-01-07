const userModel = require("../models/userModel")

exports.createUser = async (req, res)=>{

    const user = await userModel.insertOne(req.body)

    console.log(user)

    res.json(
        {
            success : true,
            user,
            sample : "its a register page"
        }
    )
}

exports.getAllUsers = async (req, res)=>{

    const { email, password } = req.body

    const user = await userModel.findOne({email : email})

    console.log(email)

    if(user){

        if(user.password===password){

            res.json(
                {
                    success : true,
                    user
                }
            )
        }
        else{
            res.json(
                {
                    success : false,
                    message : "invalid-password"
                }
            )
        }

    }
    else{
         res.json(
            {
                success : false,
                message : "User Not Found"
            }
        )
    }

}