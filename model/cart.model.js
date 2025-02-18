const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String
    }, cart: [
        {
            id: String,
            img: String,
            himg: String,
            heading: String,
            price: String,
            sprice: String,
            category: String,
            qty:Number
        }
    ]
}, { versionKey: false, timestamps: true })

const cartModel = mongoose.model("cartModel", cartSchema)

module.exports = cartModel