const express = require("express");
const { sendOTP, verifyOTPAndlogin } = require("../controllers/loginController");

const router = express.Router();

router.post("/sendotp",sendOTP);
router.post("/verifyotpandlogin",verifyOTPAndlogin);


module.exports = router;