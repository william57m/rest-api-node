var Sequelize = require('sequelize');

var sequelize = new Sequelize('students', 'root', 'root', {
	host: "localhost",
	port: 8889,
	dialect: 'mysql'
});

exports.sequelize = sequelize;

