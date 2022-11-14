var http = require('http');
var fs = require('fs'); 
var port = 8080;

http.createServer(function(req, res) {
    fs.readFile('main.html', function(err,data){
        res.write(data);
        return res.end();
    });

}).listen(port);