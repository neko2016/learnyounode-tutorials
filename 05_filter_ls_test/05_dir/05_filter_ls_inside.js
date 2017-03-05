var fs = require('fs');
var path = "../05_dir"; // both relative and abosolute paths work; I used the relative path here
var postfix = "txt";

function filter_ls () {
    fs.readdir(path, function printFile(err, fileList) {
        if (err) {
            console.log(err);
            return err;
        } 
        for (var i = 0; i < fileList.length; i++) {
            var file = fileList[i].split('.')
            //console.log(file);
            if (file[1] == postfix) {
                console.log(fileList[i]);
            }
        }
    })
}

filter_ls();
