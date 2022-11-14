const mysql = require('mysql');
const dotenv= require('dotenv');
let instance =null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    User: PROCESS.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) =>{
    if (err) {
        console.log(err.message);
    }
    //console.log('db ' + connection.state );
});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();

    }
    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "select * from app_table";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            //console.log(response);
            return response;

        } catch (error) {
            console.log(error);
        }
    }

    async insertNewIngredient (ingredient) {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "insert into app_table (ingredient) values (?, ?);";

                connection.query(query, [ingredient] ,(err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.response);
                })
            });
            return {
                ingredient : ingredient
            }

        }catch (error) {
            console.log(error);
        }
    }

}

module.exports = DbService;
