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

// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)

// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })

// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }

// const net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   const d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// const server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))

const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))