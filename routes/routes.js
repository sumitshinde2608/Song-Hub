const express = require("express");
const router = express.Router();

const userControllerFunctions = require("../controllers/users.js");

router.post("/signin", userControllerFunctions.login);
router.post("/signup", userControllerFunctions.signup);

module.exports = router;
