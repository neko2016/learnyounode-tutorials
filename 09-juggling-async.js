var http = require('http');
var urls = process.argv.slice(2);
var arr = [];

function requestHttp(i){
    http.get(urls[i], function(response){
        var result = "";
        response.setEncoding('utf8');
        response.on('data', function(data){
            result += data;
        })
        response.on('end', function(){
            // arr.push(result); 
            // the above method cannot guarantee the returned data will queue in the same order as the supplied urls
            arr[i] = result;
            count ++;
            if (count === 3){
                print();
            }
        })
    })
}

function print(){
    for (let i = 0; i < 3; i++){
        console.log(arr[i]);
    }
}

for(let i = 0; i < 3; i++){
    var count = 0;
    requestHttp(i);
}