const email = "barapatredhruv28012006@gmail.com"

const password = "noapgmrwocwzsrjx"
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email, // Your Gmail ID
        pass: password, // Use App Password here
    },
});

const sendEmail = async (email, html) => {
    try {
        const mailOptions = {
            from: `"Dhruv Barapatre" <${email}>`,
            to:email,
            subject:"Otp For Verification",
            html,
        };

        const info = await transporter.sendMail(mailOptions);
        if (info.accepted.length > 0) {
            return { isSuccess: true, message: "Otp Successfully Sent" }
        }
        return { isSuccess: false, message: "Failed to Send Otp....." }
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendEmail;

