const {Employee} = require('../models');

module.exports.displayEmployees =async function(req,res){
    const workers =await Employee.findAll();
    res.render('index', {workers});
};
