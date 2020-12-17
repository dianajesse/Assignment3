const User = require("../model/user.js")

const bcrypt = require('bcrypt')

const authCtrl = {}

authCtrl.signup= async (request,response)=>{
    response.send("Hey you signed up")
    const {firstName,lastName,email,passWord} = request.body;

    const user =new User({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })
    try{

        user.password= bcrypt.hashSync(user.password,10)
        const newUser = await user.save()
        response.send({ message : "User created succussfully"})
    }
    catch (exception){
        console.log(exception)
        response.status(500).send({error:"Internal Server Error"})
        
    }
}


module.exports=authCtrl