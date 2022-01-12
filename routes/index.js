var express = require('express');
var router = express.Router();
const EmployeeController = require('../Controllers/EmployeeController');

/* GET home page. */
router.get('/', EmployeeController.displayEmployees);

module.exports = router;
