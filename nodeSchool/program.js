//console.log('HELLO WORLD');

// var sum = 0;
// for (var i = 0; i < process.argv.length; i++) {
//     if (i > 1) {
//         sum += +process.argv[i];
//     }
// }
// console.log(sum);

// var fs = require('fs');
// var buf = fs.readFileSync(process.argv[2]);
// var lines = buf.toString().split('\n').length - 1;
// console.log(lines);

// var fs = require('fs');
// fs.readFile(process.argv[2], function done(err, content) {    
//     var lines = content.toString().split('\n').length - 1;
//     console.log(lines);
// })

// var fs = require('fs');
// var path = require('path');
// var folder = process.argv[2];
// var ext = '.' + process.argv[3];
// fs.readdir(folder, function donr(err, lists) {
//     if (err) {
//         console.error(err);
//     }
//     var arr = [];
//     for (var i in lists) {
//         if (path.extname(lists[i]) == ext) console.log(lists[i])
//     }
// })

// var fs = require('fs');
// var path = require('path');
// var module1 = require('./modele1.js');
// var folder = process.argv[2];
// var ext = process.argv[3];
// module1(folder, ext, function (err, lists) {
//     if (err) {
//         console.error(err);
//     }
//     lists.forEach(function (file) {
//         console.log(file)
//     })
// })

const http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)