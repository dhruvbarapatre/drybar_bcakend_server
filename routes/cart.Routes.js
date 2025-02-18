const express=require("express")


const {getCartData,addToCart, productDeleteCart, productDec, increaseQuantity}=require("../controller/cart.controller")
const isAuth = require("../middleware/auth")
const isUser = require("../middleware/isUser")


const cartRoutes=express.Router()

cartRoutes.get("/get",isAuth,isUser,getCartData)
cartRoutes.post("/addToCart",isAuth,isUser,addToCart)
cartRoutes.delete("/removeCart/:deleteId",isAuth,isUser,productDeleteCart)
cartRoutes.post("/dec_qty/:productId",isAuth,isUser,productDec)
cartRoutes.post("/inc_qty/:productId",isAuth,isUser,increaseQuantity)

cartRoutes.all("*",(req,res)=>{
    res.status(400).send("You Entered Wrong Route")
})

module.exports=cartRoutes