const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// parse requests of contenttype: application/json
app.use(bodyParser.json());
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
// Create a route for getting all customers
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