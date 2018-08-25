//requiring the mysql package and setting up the database connection to be exported
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    port : 3306,
    database : 'burgers_db'
})

module.exports = connection;