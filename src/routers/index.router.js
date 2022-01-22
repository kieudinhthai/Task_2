var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index.controller')
var middleware = require('../middlewares/auth')

router.get('/',middleware.auth, indexController.index)

module.exports = router;


