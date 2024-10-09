const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);


const sendSmsOtp = async (OTP , phoneNumber)=>{
    const messageOption = {
        body: `Your OTP is ${OTP} from CodingWorkx`,
        to: '+91'+ phoneNumber, 
        from: '+12528811727', 

    }

    try {
        const response = await client.messages.create(messageOption);
    } catch (err) {
        console.log('Error from otp sending',err);
    }
    
}

module.exports = sendSmsOtp;