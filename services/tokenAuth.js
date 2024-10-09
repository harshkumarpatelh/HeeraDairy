const jwt = require("jsonwebtoken");
const tokenSecreteKey = process.env.JWTTOKENKEY;


const generateToken = (userId , expiry)=>{
    const payload = {
        id : userId
    }

    const token = jwt.sign(payload ,tokenSecreteKey,{ expiresIn : expiry});

    return token;
}

const verifyToken = (token)=>{
    try {
        const payload = jwt.verify(token , tokenSecreteKey);
        return payload;
    } catch (err) {
        console.log("Error from verifyToken", err);
        return {id : "invalid token"};
    }
}

module.exports ={
    generateToken,
    verifyToken
}