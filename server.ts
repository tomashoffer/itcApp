const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;

export const localJson = () => {
    const fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
  };

app.use(cookieParser());
app.use(express.json());
// app.use(express.static("public"));
app.get('/', (req, res)=>{
res.send('hola')
})

// ROUTES FILES IMPORTS



// ROUTES



app.listen(app.get("port"), () => {
    console.log(`app listening at http://localhost:3000`);
  });