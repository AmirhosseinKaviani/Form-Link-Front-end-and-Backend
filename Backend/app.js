const express = require("express");
const cors = require("cors");
const userModel = require("./models/user.model");
require("./configs/db");
const app = express();
app.use(express.json())
app.use(cors())

app.get("/users", async (req, res,)=>{
    try{
        const data = await userModel.find()
        res.status(200).json(data)
    }catch(error){
        res.json(error)
    }
})

app.post("/users", async (req, res)=>{
    try{
        const result = await userModel.create(req.body)
        res.status(201).json({message: "added",result})
        console.log(req.body)
    }catch(error){
        res.status(422).json({message: "error.message"})
    }
})
app.listen(9000)