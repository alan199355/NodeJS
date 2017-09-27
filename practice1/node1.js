var http = require('http');
var url = require('url');
var items = [];
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');
var root = __dirname;
var server = http.createServer(function (req, res) {
    // req.on('data',function(chunk){
    //     console.log('parsed',chunk)
    // });
    // req.on('end',function(){
    //     console.log('done parsing');
    //     res.end()
    // })    
    console.log('created')
    if ('/' == req.url) {
        switch (req.method) {
            case 'POST':
                var item = '';
                req.setEncoding('utf8');
                req.on('data', function (chunk) {
                    item += chunk;
                });
                req.on('end', function () {
                    items.push(item);
                    res.end('OK,posted.\n');
                });
                break;
            case 'GET':
                items.forEach(function (item, i) {
                    //res.write(i+')'+item+'\n');                                
                    var body = items.map(function (item, i) {
                        return i + ')' + item;
                    }).join('\n');
                    //res.setHeader('Content-Length',Buffer.byteLength(body));
                    //res.setHeader('Content-type','text/plain;charset="utf-8"');
                    res.end(body)
                });

                break;
            case 'DELETE':
                var path = url.parse(req.url).pathname;
                var i = parseInt(path.slice(1), 10);
                if (isNaN(i)) {
                    res.statusCode = 400;
                    res.end('Invalid item id');
                } else if (!item[i]) {
                    res.statusCode = 404;
                    res.end('Item not found');
                } else {
                    items.splice(i, 1);
                    res.end('succees\n');
                }
                break;
        }
    }
})
console.log('adasda');
server.listen(3000)