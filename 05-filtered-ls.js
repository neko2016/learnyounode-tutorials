var fs = require('fs');
var path = process.argv[2];
var type = process.argv[3];

fs.readdir(path, function filter(err, files){
  if (err) {
    console.log(err);
    return err;
  }
  for (var i = 0; i < files.length; i++) {
    var file_prefix = files[i].split('.')
    if (file_prefix[1] === type){
      console.log(files[i])
    }
  }
})



