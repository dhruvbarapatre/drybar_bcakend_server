const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
dbconnection = mongoose.connect(process.env.mongo_url)
module.exports = dbconnection