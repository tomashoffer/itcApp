const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;


app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("public/dist"));

// ROUTES FILES IMPORTS
const userRoute = require('./routes/userRoutes');

// ROUTES
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
  