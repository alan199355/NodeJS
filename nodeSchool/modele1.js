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
var z=10;
function foo(){
    console.log(z);
}
(function(funArg){
    var z=20;
    funArg();
})(foo)

var data=[];
for(var k=0;k<3;k++){
    data[k]=function(){
        console.log(k);
    };
}
data[0]();
data[1]();
data[2]();