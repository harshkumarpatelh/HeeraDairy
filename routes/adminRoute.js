const express = require("express");
const { addUser } = require("../controllers/adminController");

const router = express.Router();

router.post("/adduser",addUser);


module.exports = router;