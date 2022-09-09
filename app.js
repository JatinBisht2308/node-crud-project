const express = require('express');
const app = express();


// registering the route
const userRoute = require("./routes/userRoute");
app.use("/user",userRoute);
module.exports = app;