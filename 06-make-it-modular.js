var mod = require("./06-module-filter.js")
var dir = process.argv[2];
var ext = process.argv[3];

mod(dir, ext, function(err, list){
    if(err){
        console.log('an error occurs when reading file' + dir);
        return err;
    }
    list.forEach(function(file){
        console.log(file);
    })
})

