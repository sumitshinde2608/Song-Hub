// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Files
const db = require("./config/devConfig").mongoDbURL;
const routes = require("./routes/routes");

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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

app.use("/user", routes);

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
