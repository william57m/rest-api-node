import users from './users';

function registerRoutes(server) {
	server.get ('/users', users.list);
    server.post('/users', users.post);
    server.get ('/users/:id', users.get);
    server.put ('/users/:id', users.put);
    server.del ('/users/:id', users.delete);
}

export {
    registerRoutes
};
