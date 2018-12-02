import restify from 'restify';

import { registerRoutes } from './controllers';

const server = restify.createServer();

function run() {
    server.pre(function(req, res, next) {
        req.headers.accept = 'application/json';
        return next();
    });
    server.use(restify.plugins.bodyParser({
        requestBodyOnGet: true
    }));
    registerRoutes(server);

    server.listen(8080, function() {
        console.log('%s listening at %s', server.name, server.url);
    });
}

run();

export default server;
