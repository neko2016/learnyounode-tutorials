var fs = require('fs');

function countLines(err, text)  {
    if (err) {
        console.error(err);
        return err;
    }
    var str = text.toString();
    var lines = str.split('\n');
    console.log(lines.length-1);
    // console.log(lines);
}

/*
function logMessage(err, message) {
    if (err) {
        console.error(err);
        return err;
    }
    console.log(message);
} 
*/

fs.readFile(process.argv[2], countLines);

// fs.readFile(process.argv[2], 'utf8', logMessage);