const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String,required:true,minLength:3},
    family:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,minLength:2,required:true}
})
module.exports= mongoose.model("user", userSchema)