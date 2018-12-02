import { User } from '../core/db/models';


/*
* Get one user by id
* GET /users/id
*
*/
function getUser(req, res, next) {
	User.findById(req.params.id).then(function(user) {
		res.send(200, user);
	}).error(function(result) {
		res.send(400, 'This id doesn\'t exist.');
	});
	next()
}


/*
* Get list of all users
* GET /users
*
*/
function listUsers(req, res, next) {
	User.findAll().then(function(users) {
		res.send(200, users);
	}).error(function(result) {
		res.send(400, 'An error occured.');
	});
	next();
}


/*
* Create a user
* POST /users
*
*/
function postUser(req, res, next) {
	var {firstname, lastname} = req.body;

	// TODO: check if mandatory parameters are given, otherwise return an error
	User.create({firstname: firstname, lastname: lastname}).then(function(result) {
		res.send(201, result.dataValues);
	}).error(function(result) {
		res.send(400, 'An error occured.');
	});
	next();
}


/*
* Update a user by id
* PUT /users/id
*
*/
function putUser(req, res, next) {
	User.findById(req.params.id).then((user) => {
		var {firstname, lastname} = req.body;
		user.firstname = firstname;
		user.lastname = lastname;

		user.save().then(function(user) {
			res.send(200, user);
		}).error(function(result) {
			res.send(400, 'An error occured.');
		})
	}).error((result) => {
		res.send(400, 'This id doesn\'t exist.');
	});

	next();
}


/*
* Delete a user by id
* DELETE /users
*
*/
function deleteUser(req, res, next) {
	User.find(req.params.id).then(function(user) {
		user.destroy().then(function(user) {
			res.send(200, user)
		}).error(function(result) {
			res.send(400, 'An error occured.');
		});
	}).error(function(result) {
		res.send(400, 'This id doesn\'t exist.');
	});
	next();
}


export default {
	get: getUser,
	list: listUsers,
	post: postUser,
	put: putUser,
	delete: deleteUser
};
