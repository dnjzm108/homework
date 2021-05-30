const express = require('express');
const router = express.Router();
const controller = require('./maincontroller');
const auth = require('../../middleware/auth');
const jwt = require('../../jwt');

router.post('/user/join',controller.newJoin)
router.get('/user/join',controller.join)
router.get('/user/info',controller.info)
router.post('/user/login',controller.login)
router.use('/',controller.main);

module.exports = router;

