var http = require('http');
var fs = require('fs'); 
const { append } = require('vary');
const { default: nodeTest } = require('node:test');
var port = 8080;

//app.use(express.static(path.join(__dirname, 'public')));

http.createServer(function(req, res) {
    fs.readFile('main.html', function(err,data){
        res.write(data);
        return res.end();
   });



}).listen(port);