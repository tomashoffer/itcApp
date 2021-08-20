const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require("cookie-parser");
const path = require("path");
const port = process.env.PORT || 3000;

export const localJson = () => {
    const fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
  };

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("public/dist"));

// ROUTES FILES IMPORTS



// ROUTES

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
  