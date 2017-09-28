var http = require('http')
var url = require('url')
var qs = require('querystring');
var formidable = require('formidable');
var items = []
var server = http.createServer(function (req, res) {
    console.log(req.method)
    if ('/' == req.url) {
        switch (req.method) {
            case 'POST':
                //add(req, res)
                upload(req, res)
                break;
            case 'GET':
                show(res)
                break;
            default:
                badRequest(res)
        }
    } else {
        notFound(res)
    }
})

function show(res) {
    var html = '<html><head><title>Todo List</title>' +
        '<h1>Todo List</h1>' +
        '<ul>' +
        items.map(function (item) {
            return '<li>' + item + '</li>'
        }).join('') +
        '</ul>' +
        '<form  method="post" action="/" enctype="multipart/form-data">' +
        '<p><input type="text" name="item" /></p>' +
        '<p><input type="file" name="file" /></p>' +
        '<p><input type="submit" value="upload" /></p>' +
        '</form></head></html>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

function upload(req, res) {
    if (!isFormData(req)) {
        res.statusCode = 400;
        res.end('Bad Request:expecting multipart/form-data');
        return;
    }
    var form = new formidable.IncomingForm();
    form.on('field',function(field,value){
        console.log(field);
        console.log(value);
    });
    form.on('file',function(name,file){
        console.log(name);
        console.log(file);
    });
    form.on('end',function(){
        res.end('upload complete');
    });
    form.parse(req);
    // form.parse(req, function (err, fields, files) {
    //     console.log(fields);
    //     console.log(files);
    //     res.end('upload complete');
    // });
    form.on('progress', function (bytesReceived, bytesExpected) {
        var percent = Math.floor(bytesReceived / bytesExpected * 100);
        console.log(percent);
    })
}

function isFormData(req) {
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}

function notFound(res) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bad Request');
}

function add(req, res) {
    var body = '';
    req.setEncoding('utf-8');
    req.on('data', function (chunk) {
        body += chunk
    });
    req.on('end', function () {
        var obj = qs.parse(body);
        items.push(obj.item);
        show(res);
    })
}
server.listen(3000)