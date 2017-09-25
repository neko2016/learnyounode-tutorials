var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket){
    socket.end(format());
})

function pad(n) { return n < 10 ? '0' + n : n }

function format(){
    var d = new Date();
    var year = d.getFullYear() + "-";
    var month = pad(d.getMonth()+1) + "-";
    var day = pad(d.getDate()) + " "
    var hour = pad(d.getHours()) + ":";
    var minute = pad(d.getMinutes()) + "\n";
    var timestamp = year + month + day + hour + minute;
    return timestamp;
}

server.listen(port);
