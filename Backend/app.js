const express = require("express");
const cors = require("cors");
const userModel = require("./models/user.model");
require("./configs/db");
const app = express();
app.use(express.json())
app.use(cors())

app.get("/users", async (req, res,)=>{
    const data = await userModel.find()
    res.json(data)
})

app.post("/users", async (req, res)=>{
const result = await userModel.create(req.body)
res.status(201).json({message: "added",result})
console.log(req.body)
})
app.listen(9000)