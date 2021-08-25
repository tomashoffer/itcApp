"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(isAdmin);
var userControler_1 = require("../controlers/userControler");
router.post('/logIn', userControler_1.login);
router.post('/register', userControler_1.register);
router.get('/adminPanel', isAdmin, userControler_1.adminPanel);
function isAdmin(req, res, next) {
    var getCookie = req.cookies.role;
    var role = getCookie.role;
    if (role === 'admin') {
        console.log(role);
        next();
    }
    else {
        console.error();
    }
    // res.send({isAdmin:true})
}
module.exports = router;
