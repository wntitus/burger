// requiring our mysql connection
let connection = require('./connection');

// creating ORM object to be used by the burger model
let orm = {
    
    // ORM method that selects all entries from a table 
    selectAll: function(tableInput, callback) {
        let queryString = 'SELECT * FROM ' + tableInput + ';'
        connection.query(queryString, function(err, response) {
            if (err) throw err;

            callback(response);
        })

    },

    // ORM method that inserts one new row into a table given a column and a value for the column
    insertOne: function(tableInput, colInput, valInput, callback) {
        let queryString = 'INSERT INTO ' + tableInput + '(' + colInput + ') VALUES ("' + valInput + '");'
        connection.query(queryString, function(err, response) {
            if (err) throw err;

            callback(response);
        })
    },

    // ORM method that updates one row in a table given a value to set
    updateOne: function(tableInput, colInput, valInput, idInput, callback) {
        let queryString = 'UPDATE ' + tableInput + ' SET ' + colInput + ' = ' + valInput + ' WHERE id=' + idInput + ';'
        connection.query(queryString, function(err, response) {
            if (err) throw err;

            callback(response);
        })
    }


}

// exporting our ORM object
module.exports = orm;