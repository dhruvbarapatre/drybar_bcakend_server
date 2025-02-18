const userModel = require("../model/user.Model");
const sendEmail = require("../utlis/nodemailer");
const otp = require("../utlis/otp")
const ejs = require("ejs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
dotenv.config()

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json("Fill All The Fields")
    }
    try {
        const data = await userModel.find({ email })
        if (data.length > 0) {
            return res.status(400).json("User Alreday Exsist")
        }
        const otpNumber = otp
        const html = await ejs.renderFile(__dirname + "/../views/email.ejs", { name, otp })
        const resmail = await sendEmail(email, html)
        bcrypt.hash(password, 5, (err, hash) => {
            if (err) {
                return res.status(400).json({ err: err.message })
            }
            if (hash) {
                const userdata = { name, email, password: hash, otp: otpNumber }
                const token = jwt.sign(userdata, process.env.secret_key)
                res.status(200).cookie("drybar_token", token, {
  httpOnly: true, 
  secure: true, 
  sameSite: "None"
}).json(resmail.message)
            } else {
                return res.status(400).json({ err: "Error Occured" })
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}


const verify = async (req, res) => {
    const { otp } = req.body;
    if (!otp) {
        return res.status(400).json("Fill All the Fields");
    }
    if (otp != req.userData.otp) {
        return res.status(400).json("You Enterd Wrong Otp...");
    }
    const { name, email, password } = req.userData
    req.userData = ""
    try {
        const isFind = await userModel.find({ email })
        if (isFind.length > 0) {
            return res.status(400).json("User Alreday Exsist")
        }
        const data = await userModel.create({ name, password, email })
        const user = data.toObject();
        delete user.password;
        req.userData = user
        if (!data) {
            return res.status(400).json({ message: "error In creating USer..." })
        }
        res.clearCookie('drybar_token').status(200).json({ message: "User Created SuccesFully..." })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const signIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Fill All The Fields..." });
    }
    try {
        const userdata = await userModel.findOne({ email });
        if (!userdata) {
            return res.status(400).json({ message: "User Not Found..." });
        }
        bcrypt.compare(password, userdata.password, (err, result) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            if (!result) {
                return res
                    .status(400)
                    .json({ message: "Invalid or Wrong Password..." });
            }
            const { password, ...userId } = userdata;
            const token = jwt.sign(userId, process.env.secret_key);
            res
                .cookie("drybar_token", token, {
  httpOnly: true, 
  secure: true,
  sameSite: "None"
})
                .status(200)
                .json({ message: "User Signed In Succesfully..." });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const userForLogin = (req,res) => {
    const user=req.userData;
    res.send({user})
}


module.exports = { userForLogin, signUp, verify, signIn }
