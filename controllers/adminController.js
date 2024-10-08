const users = require("../models/users");

const addUser = async (req, res) => {
    const { firstName, lastName, phoneNo, userType = 2 } = req.body;


    // console.log(firstName , lastName , phoneNo, userType);
    try {
        const response = await users.create({
            firstName,
            lastName,
            phoneNo,
            userType,
        });

        if (!response) {
            res.status(500).json({
                status: "Failure",
                result: {}
            })
        }

        res.status(201).json({
            status: "Success",
            message: "Successfully added user",
            result: {}
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addUser
}