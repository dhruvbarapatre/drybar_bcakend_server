const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const dbconnection = require("./utlis/db")
const userRoutes = require("./routes/user.Routes")
const cookieParser = require('cookie-parser')
const cartRoutes = require("./routes/cart.Routes")
const dataRoutes = require("./routes/data.Routes")
const cors=require("cors")
const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.set("view engine", "ejs")
app.use(cookieParser()) 

app.use("/user", userRoutes)
app.use("/cart", cartRoutes)
app.use("/datas",dataRoutes)

app.listen(process.env.port, async () => {
    try {
        await dbconnection
        console.log("Connected To Db")
    } catch (error) {
        console.log(error)
    }
})