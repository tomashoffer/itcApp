export {};
const express = require("express");
const router = express.Router();

import { logIn, getUser } from "../controlers/userControler";


router.post('/logIn', logIn);
router.get('/getUser', getUser)

module.exports = router;
