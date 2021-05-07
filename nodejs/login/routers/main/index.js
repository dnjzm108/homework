const express = require('express');
const router = express.Router();
const controller = require('./main.controller')

console.log(controller);

router.use('/',controller.main);

module.exports = router;