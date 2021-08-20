"use strict";
exports.__esModule = true;
exports.logIn = void 0;
var express = require("express");
var app = express();
function logIn(req, res) {
    res.send({ logIn: true });
}
exports.logIn = logIn;
