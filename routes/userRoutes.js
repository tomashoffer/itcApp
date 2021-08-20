"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var userControler_1 = require("../controlers/userControler");
router.post('/logIn', userControler_1.logIn);
router.get('/getUser', userControler_1.getUser);
module.exports = router;
