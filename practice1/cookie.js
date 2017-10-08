var connect = require('connect');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = connect()
    .use(cookieParser('tobi is a cool ferret'))
    .use(bodyParser.json())
    .use(function (req, res) {
        console.log(req.cookies);
        console.log(req.signedCookies);
        console.log(req.body9)
        res.setHeader('Set-Cookie', 'foo=bar');
        res.end('Registered new user: ' + req.body);
        res.end('hello\n');
    }).listen(3000);