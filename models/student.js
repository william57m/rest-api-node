var Sequelize = require('sequelize');
var sequelize = require('../config/sequelize').sequelize;

var Student = sequelize.define('Student', {
	firstname: {type: Sequelize.STRING},
	lastname: {type: Sequelize.STRING}
});

exports.Student = Student;