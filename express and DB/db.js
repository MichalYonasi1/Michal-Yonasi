const {createPool} = require('mysql');
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "michRaz_1203",
    connectionLimit: 10
});

pool.query('select * from michalyonasi.users', (err, res) => {
    return console.log(res);
}); 


const mysql = require("mysql2");
const dbConfig = require("./db.config.js");
// Create a connection to the database
const connection = mysql.createConnection({
host: dbConfig.HOST,
user: dbConfig.USER,
password: dbConfig.PASSWORD,
database: dbConfig.DB
});
// open the MySQL connection
connection.connect(error => {
if (error) throw error;
console.log("Successfully connected to the database.");
});
module.exports = connection;