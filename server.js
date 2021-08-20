"use strict";
exports.__esModule = true;
exports.localJson = void 0;
var express = require("express");
var app = express();
var fs = require("fs");
var cookieParser = require("cookie-parser");
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
app.set("port", 8800 || process.env.PORT);
// ROUTES FILES IMPORTS
// ROUTES
app.listen(app.get("port"), function () {
    console.log("app listening at http://localhost:" + app.get("port"));
});
