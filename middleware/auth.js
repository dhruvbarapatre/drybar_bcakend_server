const jwt = require("jsonwebtoken")
const dotenv=require("dotenv")
dotenv.config()
const isAuth = (req, res, next) => {
    const { drybar_token } = req.cookies;   
    req.token = drybar_token
    if (!drybar_token)  {
        return res.status(400).json({ message: "You Are Not Login...." })
    }
    jwt.verify(drybar_token, process.env.secret_key, (err, decoded) => {
        if(err){
            return res.status(400).json({err:err.message})
        }
        if(decoded){
            if(decoded._doc){
                req.userData=decoded._doc
            }else{
                req.userData=decoded;
            }
        }else{
            return res.status(400).json({msg:"Your Token Is Unvalid....."})
        }
    })
    next()
}

module.exports = isAuth