var express = require('express');
var router = express.Router();

var userController = require('../controllers/users.controller')

router.get('/get-all/', userController.getAll)
router.get('/search/', userController.search)
router.post('/multi-add', userController.add)
module.exports = router;
