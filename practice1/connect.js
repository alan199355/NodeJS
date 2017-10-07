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
var api = connect()
    .use(users)
    .use(pets)
    .use(errorHandler);
app.use(hello)
    .use('/api', api)
    .use(errorPage)
    .listen(3000);
var db = {
    users: [{
            name: 'tobi'
        },
        {
            name: 'loki'
        },
        {
            name: 'jane'
        }
    ]
}
// app.use(logger)
//     .use('/admin', restrict)
//     .use('/admin', admin)
//     .use(router(routes))
//     .use(hello)
//     .use(errorHandler)
//     .listen(3000);

function users(req, res, next) {
    var match = req.url.match(/^\/user\/(.+)/);
    if (match) {
        var user = db.users[match[1]];
        if (user) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(user));
        } else {
            var err = new Error('User not found');
            err.notFound = true;
            next(err);
        }
    } else {
        next();
    }
}

function pets(req, res, next) {
    if (req.url.match(/^\/pet\/(.+)/)) {
        foo();
    } else {
        next();
    }
}

// function errorHandler() {
//     var env = process.env.NODE_ENV || 'development';
//     return function (err, req, res, next) {
//         res.statusCode = 500;
//         switch (env) {
//             case 'development':
//                 res.setHeader('Content-Type', 'application/json');
//                 res.end(JSON.stringify(err));
//                 break;
//             default:
//                 res.end('Server error');
//         }
//     }
// }

function errorHandler(err, req, res, next) {
    console.log('handler')
    //console.log(err.stack);
    res.setHeader('Content-Type', 'application/json');
    if (err.notFound) {
        res.statusCode = 404;
        res.end(JSON.stringify({
            error: err.message
        }));
    } else {
        res.statusCode = 500;
        res.end(JSON.stringify({
            error: 'Interval Server Error'
        }));
    }
}

function errorPage(err, req, res) {
    console.log('page')
    console.log(err);
}

function hello(req, res,next) {
    if (req.url.match(/^\/hello/)) {
        res.end('hello world');
    } else {
        next();
    }

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