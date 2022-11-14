const CRUD_operations = require("./CRUD_functions.js");
const sql = require("./db.js");
const createNewUser = function(req,res){
// Validate request
if (!req.body) {
res.status(400).send({
message: "Content can not be empty!"
});
return;
}
const newUser = {
"email": req.body.email,
"name": req.body.name,
"password": req.body.password
};
sql.query("INSERT INTO users SET ?", newUser, (err, mysqlres) => {
if (err) {
console.log("error: ", err);
res.status(400).send({message: "error in creating user: " + err});
return;
}
console.log("created user: ", { id: mysqlres.insertId, ...newUser });
res.send({message:"new user created successfully"});
return;
});
};
module.exports = {createNewUser};

// Create a new Customer
app.post("/newCustomer", CRUD_operations.createNewCustomer);
