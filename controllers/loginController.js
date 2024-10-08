const users = require("../models/users");
const sendOTP = require("../services/sentOTP");


const login = async (req, res) => {
    const { phoneNo } = req.body;
    const response = await users.findOne({
        where: {
            phoneNo
        }
    });

    if (!response) {
        return res.status(404).json({
            statu: "Success",
            message: "Mobile number not found",
        })
    }
   
    const OTP = Math.floor(Math.random() * (10000 - 1000) + 1000); // 4 digits OTP
    sendOTP(OTP , phoneNo);
   
    // storing OTP in db
    response.update({
        otp : OTP
    });

    res.status(200).json({
        status: "Success",
        message: "OTP sent successfully to your number",
        result: {}
    })



}

module.exports = login;