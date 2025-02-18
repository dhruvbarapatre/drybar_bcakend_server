const express = require("express")
const { getGift, getNew, gethairProduct, getTool } = require("../controller/data.controller")
const isUser = require("../middleware/isUser")
const isAuth = require("../middleware/auth")

const dataRoutes = express.Router()

dataRoutes.get("/gift", getGift)
dataRoutes.get("/new", getNew)
dataRoutes.get("/hair-products", gethairProduct)
dataRoutes.get("/hair-tool", getTool)



module.exports = dataRoutes