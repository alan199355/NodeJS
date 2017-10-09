var fs = require('fs');
var path = require('path');
module.exports = function (folder, ext, callback) {
    fs.readdir(folder, function done(err, lists) {
        if (err) {
            return callback(err);
        }
        lists = lists.filter(function (file) {
            return path.extname(file) === '.' + ext
          })

        callback(null, lists)
    })
}