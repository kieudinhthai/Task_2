var express = require('express');
var router = express.Router();

var apiController = require('../controllers/api.controller')
var middleware = require('../middlewares/auth')

router.get('/get-all/', middleware.auth, apiController.getAll)
router.get('/search/',middleware.auth, apiController.search)
router.post('/multi-add',middleware.auth, apiController.add)
router.post('/login', apiController.login)

module.exports = router;
