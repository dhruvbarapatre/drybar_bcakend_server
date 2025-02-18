const dataModel = require("../model/data.model")

const getGift = async (req, res) => {
    let { page, limit } = req.query
    let start, end
    start = (page - 1) * limit
    end = Number(start) + Number(limit)
    try {
        let data = await dataModel.find().lean()
        data = data[0].gift
        if(page,limit){
            const filterd = data.filter((element, index, arr) => index >= start && index < end)
            return res.status(200).json({data:filterd})
        }
        res.status(400).json({data})
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const getNew = async (req, res) => {
    let { page, limit } = req.query
    let start, end
    start = (page - 1) * limit
    end = Number(start) + Number(limit)
    try {
        let data = await dataModel.find().lean()
        data = data[0].new
        if(page,limit){
            const filterd = data.filter((element, index, arr) => index >= start && index < end)
            return res.status(200).json({data:filterd})
        }
        res.status(400).json({data})
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const gethairProduct = async (req, res) => {
    let { page, limit } = req.query
    let start, end
    start = (page - 1) * limit
    end = Number(start) + Number(limit)
    try {
        let data = await dataModel.find().lean()
        data = data[0].hair_products
        if(page,limit){
            const filterd = data.filter((element, index, arr) => index >= start && index < end)
            return res.status(200).json({data:filterd})
        }
        res.status(200).json({data})
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const getTool = async (req, res) => {
    let { page, limit } = req.query
    let start, end
    start = (page - 1) * limit
    end = Number(start) + Number(limit)
    try {
        let data = await dataModel.find().lean()
        data = data[0].hair_tool
        if(page,limit){
            const filterd = data.filter((element, index, arr) => index >= start && index < end)
            return res.status(200).json({data:filterd})
        }
        res.status(400).json({data})
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports = { getGift, getNew, gethairProduct, getTool }