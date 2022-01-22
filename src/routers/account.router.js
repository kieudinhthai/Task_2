var express = require('express');
var router = express.Router();

var accountController = require('../controllers/account.controller')

router.get('/', accountController.getLogin)

module.exports = router;
