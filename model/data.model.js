const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    id: {
        type: String
    }, img: { type: String },
    himg: { type: String },
    heading: { type: String },
    price: { type: String },
    sprice: { type: String }
}, { versionkey: false, timestamps: true })

const dataModel = mongoose.model("datas", dataSchema)

module.exports = dataModel