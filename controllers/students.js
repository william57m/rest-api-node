var Student = require('../models/_list').Student;


/*
* Get one student by id
* GET /students/id
*
*/
function getStudent(req, res, next) {

	// Retrieve a student
	Student.find(req.params.id).success(function(student) {
		res.send(200, student);
	}).error(function(result) {
		res.send(400, "L'id ne correspond à aucun étudiant.");
	});
	
	next()
}
exports.get = getStudent;


/*
* Get list of all students
* GET /students
*
*/
function listStudents(req, res, next) {
	
	// Retrieve all students
	Student.findAll().success(function(students) {
		res.send(200, students);
	}).error(function(result) {
		res.send(400, "Un problème est surevenu.");
	});
	
	next();
}
exports.list = listStudents;


/*
* Create a student
* POST /students
*
*/
function postStudent(req, res, next) {
	
	// Get params from header request
	var firstname = req.header('firstname'),
		lastname = req.header('lastname');
	
	// Create new student
	Student.create({firstname: firstname, lastname: lastname}).success(function(result) {
		// Return the new student
		res.send(201, result.dataValues);
	}).error(function(result) {
		res.send(400, "Un problème est surevenu.");
	});
	next();
}
exports.post = postStudent;


/*
* Update a student by id
* PUT /students/id
*
*/
function putStudent(req, res, next) {
	
	// Retrieve the student
	Student.find(req.params.id).success(function(student) {
		
		// Get params from header request
		student.firstname = req.header('firstname');
		student.lastname = req.header('lastname');

		// Update student
		student.save().success(function(student) {
			res.send(200, student);
		}).error(function(result) {
			res.send(400, "Un problème est survenu.");
		})

	}).error(function(result) {
		res.send(400, "L'id ne correspond à aucun étudiant.");
	});
	
	next();
}
exports.put = putStudent;


/*
* Delete a student by id
* DELETE /students
*
*/
function deleteStudent(req, res, next) {
	
	// Retrieve the student
	Student.find(req.params.id).success(function(student) {
		
		// Delete the student
		student.destroy().success(function(student) {
			res.send(200, student)
		}).error(function(result) {
			res.send(400, "Un problème est survenu.");
		});
		
	}).error(function(result) {
		res.send(400, "L'id ne correspond à aucun étudiant.");
	});
	
	next();
}
exports.delete = deleteStudent;