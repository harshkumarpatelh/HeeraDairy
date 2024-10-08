const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);


const sendOTP = async (OTP , phoneNumber)=>{
    const messageOption = {
        body: `Your OTP is ${OTP} from CodingWorkx`,
        to: '+91'+ phoneNumber, 
        from: '+12528811727', 

    }

    const response = await client.messages.create(messageOption);
    console.log("otp res",response);
}

module.exports = sendOTP;