//requiring the mysql package and setting up the database connection to be exported
const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        port : 3306,
        database : 'burgers_db'
    })
}


module.exports = connection;