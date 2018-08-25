let connection = require('./connection');

let orm = {
    
    selectAll: function(tableInput, callback) {
        let queryString = 'SELECT * FROM ' + tableInput + ';'
        connection.query(queryString, function(err, response) {
            if (err) throw err;

            callback(response);
        })

    },

    insertOne: function(tableInput, colInput, valInput, callback) {
        let queryString = 'INSERT INTO ' + tableInput + '(' + colInput + ') VALUES (' + valInput + ');'
        connection.query(queryString, function(err, response) {
            if (err) throw err;

            callback(response);
        })
    },

    updateOne: function(tableInput, colInput, valInput, idInput, callback) {
        let queryString = 'UPDATE ' + tableInput + ' SET ' + colInput + ' = ' + valInput + ' WHERE id=' + idInput + ';'
        connection.query(queryString, function(err, response) {
            if (err) throw err;

            callback(response);
        })
    }


}

module.exports = orm;