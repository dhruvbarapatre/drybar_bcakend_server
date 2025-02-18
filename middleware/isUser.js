const userModel = require("../model/user.Model");

const isUser = async (req, res, next) => {
    const { email } = req.userData;
    try {
        const data = await userModel.find({ email })
        if (!data) {
            return res.status(400).json({ message: "Token Unvalid Or User Not Found." })
        }
        next()
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports = isUser 