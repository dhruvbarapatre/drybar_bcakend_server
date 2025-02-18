const express = require("express")
const { signUp ,verify, signIn, userForLogin} = require("../controller/user.controller")
const isAuth = require("../middleware/auth")
const isUser = require("../middleware/isUser")

const userRoutes = express.Router()

userRoutes.post("/signUP",signUp)
userRoutes.post("/verify",isAuth,verify)
userRoutes.post("/signin",signIn)
userRoutes.get("/get",isAuth,isUser,userForLogin)


userRoutes.all("*",(req,res)=>{
    res.status(400).send("You Entered Wrong Route")
})
module.exports = userRoutes