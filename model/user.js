const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
})
const User = mongoose.model("User",userSchema)
userSchema.set("to JSON",{
    transform:(doc,user)=>{
        user.id=user_id.toString()
        delete user._id
        delete user.__v
        delete user.password
        return user
    }
})
module.exports=User