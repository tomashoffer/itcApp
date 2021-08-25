export {};
const express = require("express");
const router = express.Router();
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser())
app.use(isAdmin);

import { login, register, adminPanel } from "../controlers/userControler";

router.post('/logIn', login);
router.post('/register', register)
router.get('/adminPanel', isAdmin, adminPanel)


function isAdmin(req, res, next){
    const getCookie = req.cookies.role;
    const role = getCookie.role;
    if(role === 'admin'){
        console.log(role);
        next();
    }else{
        console.error();
    }
    // res.send({isAdmin:true})
}
module.exports = router;
