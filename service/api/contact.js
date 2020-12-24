var express = require('express');
var router = express.Router();
var controller = require("./contactus.controller");

router.post("/", controller.saveContactData);

module.exports = router;