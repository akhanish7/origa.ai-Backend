/**
 * Project: Read Count System
 * Description: Read Count system for stories(Pratilipi Test Project)
 * Author: AK Hanish <akhanish7@gmail.com>
 */

// * Importing packages
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//Importing Enviroment Variables
require('dotenv').config();

let PORT = process.env.PORT || 8080;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// * Initialize mongoose and start service
mongoose
  .connect(
    process.env.MONGO_URI,

    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT);
    console.log('Mongoose Connected!');
  })
  .catch((err) => {
    console.log(err);
  });