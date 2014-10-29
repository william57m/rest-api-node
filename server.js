var restify = require('restify');

// Create server
var server = restify.createServer();
server.name = "Server";

server.pre(function(req, res, next) {
	req.headers.accept = 'application/json';
	return next();
});
exports.server = server;

// Config database
var sequelize = require('./config/sequelize').sequelize;
exports.sequelize = sequelize;

// Import models to initialize database
var models = require('./models/_list');
sequelize.sync({force: true});

// Setup routes
var routes = require('./controllers/_routes');
routes.setup(server);

// Launch server
server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});