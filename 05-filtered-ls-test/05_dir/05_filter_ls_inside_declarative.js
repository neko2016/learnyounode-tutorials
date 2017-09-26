var fs = require('fs');
var path = "../05_dir"; // both relative and abosolute paths work; I used the relative path here
var postfix = "txt";

function filter_ls () {
    fs.readdir(path, function printFile(err, files) {
        if (err) {
            console.log(err);
            return err;
        } 
        for (var i = 0; i < files.length; i++) {
            var file = files[i].split('.')
            //console.log(file);
            if (file[1] == postfix) {
                console.log(files[i]);
            }
        }
    })
}

filter_ls();