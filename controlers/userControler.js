"use strict";
exports.__esModule = true;
exports.adminPanel = exports.register = exports.login = void 0;
var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser());
function login(req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (username && password) {
        res.cookie('role', { role: 'admin' }, { maxAge: 9939394949, httpOnly: true });
    }
    res.send({ login: true });
}
exports.login = login;
function register(req, res) {
    res.send({ register: true });
}
exports.register = register;
function adminPanel(req, res) {
    console.log('esto funciona men dejate de jode');
    res.send({ ok: 'succes' });
}
exports.adminPanel = adminPanel;
