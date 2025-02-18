const otpGenerator = require("otp-generator")

const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false })

module.exports = otp
