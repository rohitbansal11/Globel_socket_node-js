const express = require("express");
var router = express.Router();

const {tryControlller} = require('../controller/newController.js')

router.post("/try", tryControlller);





module.exports = router;