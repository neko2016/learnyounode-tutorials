var http = require('http');
var url = require('url');
var port = process.argv[2];

function parsetime (time) {
 return {
   "hour": time.getHours(),
   "minute": time.getMinutes(),
   "second": time.getSeconds()
 };
}

function unixtime (time) {
 return { "unixtime": time.getTime()};
}

var server = http.createServer(function(req,res){
    if (req.method === "GET"){
        var parsedUrl = url.parse(req.url, true);
        // console.log(parsedUrl);
        // need to print out `parsedUrl` to ensure `time` matches with the supplied query string
        var time = new Date(parsedUrl.query.iso); 
        var outcome; 

        // if (req.url.indexOf("/api/parsetime") !== -1){
        // if (/^\/api\/parsetime/.test(req.url)) {

        if(req.url.includes("/api/parsetime")){
            outcome = parsetime(time);
        } else if (req.url.includes("/api/unixtime")){
            outcome = unixtime(time);
        }
        if (outcome) {
           res.writeHead(200, { 'Content-Type': 'application/json' });
           res.end(JSON.stringify(outcome));
         } else {
           res.writeHead(404);
           res.end();
         }
    }
    else {
        console.log('GET method only');
        res.end();
    }
})

server.listen(port);


