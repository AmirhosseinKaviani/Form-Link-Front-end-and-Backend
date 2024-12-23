const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String},
    family:{type:String},
    email:{type:String},
    password:{type:String},
    age:{type:Number}
})
module.exports= mongoose.model("user", userSchema)