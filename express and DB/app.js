const express = require("express");
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response){
    response.sendFile('main.html');
});

//app.post('/submit-data', function(request, response){
//    response.send('POST request');
//});

//app.put('/update-data', function(request, response){
//    response.send('PUT request');
//});

//app.delete('/delete-data', function(request, response){
//    response.send('DELETE request');
//});

var server = app.listen(8080, function(){
    console.log('Node.js server running...');

});


const bodyParser = require("body-parser");
// parse requests of contenttype: application/json
app.use(bodyParser.json());

app.use(express.static('static'));

// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true
}));
// simple route
app.get("/", (req, res) => {
res.json({ message: "Welcome to COMBIE web application." });
});
// set port, listen for requests
app.listen(8080, () => {
console.log("Server is running on port 3000."
);
});

var sql = require('./db')

app.get("/users", function(req, res){
SQL.query("SELECT * FROM users", (err, mysqlres) => {
if (err) {
console.log("error: ", err);
res.status(400).send({message: "error in getting all users: " + err});
return;
}
console.log("got all users...");
res.send(mysqlres);
return;
});
});

var path = require('path');