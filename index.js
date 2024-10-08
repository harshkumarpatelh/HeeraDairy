const express = require("express");
const adminRoute = require("./routes/adminRoute");
const login = require("./controllers/loginController");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//login api
app.post("/api/login",login);

// routes
app.use("/api",adminRoute);

app.listen(PORT , ()=>{
    console.log("Server running at ",PORT);
});