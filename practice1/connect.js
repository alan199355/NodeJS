var connect = require('connect');
var router = require('./router');
var routes = {
    GET: {
        '/users': function (req, res) {
            res.end('tobi,loki,ferret');
        },
        '/user/:id': function (req, res, id) {
            res.end('user ' + id);
        }
    },
    DELETE: {
        '/user/:id': function (req, res, id) {
            res.end('delete user ' + id);
        }
    }
}
var app = connect();
app.use(logger)
    // .use('/admin', restrict)
    // .use('/admin', admin)
    // .use(router(routes))
    // .use(hello)    
    .use(errorHandler())
    .listen(3000);

function errorHandler(){
    var env=process.env.NODE_ENV||'development';
    return function(err,req,res,next){
        res.statusCode=500;
        switch(env){
            case 'development':
                res.setHeader('Content-Type','application/json');
                res.end(JSON.stringify(err));
                break;
            default:
                res.end('Server error');
        }
    }
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}

function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}

function restrict(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization) return next(new Error('Unauthorized'));
    var parts = authorization.split(' ');
    var scheme = parts[0];
    var auth = new Buffer(parts[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    authenticateWithDatabase(user, pass, function (err) {
        if (err) return next(err);
        next();
    });
}

function admin(req, res, next) {
    switch (req.url) {
        case '/':
            res.end('try /users');
            break;
        case '/users':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(['tobi', 'loki', 'jane']));
            break;
    }
}