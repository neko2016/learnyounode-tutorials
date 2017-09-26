var fs = require('fs');
var path = require('path');

module.exports = (dir, ext, callback) => {
    var filteredFiles = [];

    fs.readdir(dir,(err, list) => {
        if(err){
            return callback(err);
        }
        list.forEach((file) => {
            if (path.extname(file) === '.' + ext){
                filteredFiles.push(file);
            }
        })

        callback(null, filteredFiles);
    })
}


