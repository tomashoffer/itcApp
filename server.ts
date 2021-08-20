const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require("cookie-parser");


export const localJson = () => {
    const fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
  };

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.set("port", 8800 || process.env.PORT);

// ROUTES FILES IMPORTS



// ROUTES



app.listen(app.get("port"), () => {
    console.log(`app listening at http://localhost:${app.get("port")}`);
  });