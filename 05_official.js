var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
 if (err) return console.error(err)
 files.forEach(function (file) {
 // console.log(file);
 // console.log(path.extname(file));
   if (path.extname(file) === ext) {
    console.log(file)
   }
 })
})