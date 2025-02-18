const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    }, email: {
        type: String,
        require: true
    }, password: {
        type: String,
        require: true
    }
},{
    versionKey:false,
    timestamps: true
})

const userModel = mongoose.model("usermodel", schema);

module.exports = userModel