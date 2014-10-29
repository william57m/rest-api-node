// Imports 
var students = require('./students');
	
function setup(server) {
	// Students routes
	server.get ('/students/:id', students.get);
	server.get ('/students', students.list);
	server.post('/students', students.post);
	server.put ('/students/:id', students.put);
	server.del ('/students/:id', students.delete);
}

exports.setup = setup;