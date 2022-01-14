var express = require('express');
var router = express.Router();
const EmployeeController = require('../Controllers/EmployeeController');

/* GET home page. */
router.get('/', EmployeeController.displayEmployees);
router.get('/add', EmployeeController.renderAddEmployeeForm);
router.get('/add', EmployeeController.addEmployee);
router.get('/update/:id', EmployeeController.renderUpdateForm);
router.get('/update/:id', EmployeeController.updateEmployee);
module.exports = router;
