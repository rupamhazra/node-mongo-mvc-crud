require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;

const studentRoute = require("./routes/studentRoute");
// parsing body request
app.use(express.json());

//Student Route
app.use("/api", studentRoute);

mongoose.connect(MONGO_CONNECTION)
  .then(() => {
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });