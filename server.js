// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
require("dotenv").config();

const app = express();

// Files
const db = require("./config/devConfig").mongoDbURL;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Connecting with database
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) console.log(err);
    else console.log("Successfully connected to Database!!!");
  }
);
mongoose.set("useFindAndModify", false);

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
