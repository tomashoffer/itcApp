"use strict";
exports.__esModule = true;
exports.localJson = void 0;
var express = require("express");
var app = express();
var fs = require("fs");
var cookieParser = require("cookie-parser");
var port = process.env.PORT || 3000;
var localJson = function () {
    var fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
};
exports.localJson = localJson;
app.use(cookieParser());
app.use(express.json());
// app.use(express.static("public"));
app.get('/', function (req, res) {
    res.send('hola');
});
// ROUTES FILES IMPORTS
// ROUTES
app.listen(port, function () {
    console.log("Listening on port: " + port);
});
