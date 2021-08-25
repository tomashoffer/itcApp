export {};
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser())

export function login(req: any, res: any) {
    const {username, password} = req.body;
    

    if(username && password){
        res.cookie('role',{role:'admin'}, {maxAge:9939394949, httpOnly:true})
    }
    res.send({login:true})
}

export function register(req: any, res: any) {
    res.send({register:true})
}

export function adminPanel(req, res){
    console.log('esto funciona men dejate de jode');
    res.send({ok:'succes'})

}

