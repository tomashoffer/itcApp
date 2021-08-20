var express = require("express");
var app = express();
var fs = require("fs");
var cookieParser = require("cookie-parser");
var path = require("path");
var port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("public/dist"));
// ROUTES FILES IMPORTS
// ROUTES
app.listen(port, function () {
    console.log("Listening on port: " + port);
});
