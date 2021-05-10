const express = require('express');
const router = express.Router();
const controll = require('./main_controller')

router.use('/',controll.main)

module.exports=router;