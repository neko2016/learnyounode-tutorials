var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

// var server = http.createServer(function(req,res){
//     if (req.method === "POST"){
//         req.pipe(map(function(chunk){
//             return chunk.toString().toUpperCase();
//         })).pipe(res);
//     }
// })

var content = map(function(c){
    return c.toString().toUpperCase();
})

var server = http.createServer(function(req,res){
    if (req.method !== "POST"){
        return res.end('POST request only');
    }
    if (req.method === "POST"){
        req.pipe(content).pipe(res);
    }
})

server.listen(port);

// var map = require('through2-map')
// inStream.pipe(map(function (chunk) {
// return chunk.toString().split('').reverse().join('')
// })).pipe(outStream)


