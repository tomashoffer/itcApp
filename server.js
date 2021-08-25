var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("public/dist"));
// ROUTES FILES IMPORTS
var userRoute = require('./routes/userRoutes');
// ROUTES
app.use('/user', userRoute);
app.listen(port, function () {
    console.log("Listening on port: " + port);
});
