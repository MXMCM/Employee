var express = require('express');
var router = express.Router();
const EmployeeController = require('../Controllers/EmployeeController');

/* GET home page. */
router.get('/', EmployeeController.displayEmployees);
router.get('/add', EmployeeController.renderAddEmployeeForm);
router.post('/add', EmployeeController.addEmployee);
router.get('/update/:id', EmployeeController.renderUpdateForm);
router.post('/update/:id', EmployeeController.updateEmployee);
router.get('/delete/:id', EmployeeController.deleteEmployee);
module.exports = router;
