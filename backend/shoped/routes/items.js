var express = require('express');
var router = express.Router();
const itemsController = require('../controllers').itemsController;
router.get('/', itemsController.list);
module.exports = router;