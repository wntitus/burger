// requiring our ORM so that our burger model can use it
let orm = require('../config/orm');

// creating the burger object model
let burger = {
    // method that uses the ORM's select all method to get all burgers in the table
    all: function(cb) {
        orm.selectAll('burgers', function(response) {
            cb(response);
        })
    },
    // method that uses the ORM's insert method to create a new burger in the table
    create: function(val, cb) {
        orm.insertOne('burgers', 'burger_name', val, function(response) {
            cb(response);
        })
    },
    // method that uses the ORM's update method to update the devoured status of a burger in the table
    update: function(id, cv, cb) {
        orm.updateOne('burgers', 'devoured', cv, id, function(response) {
            cb(response);
        })
    }
}

// exporting our burger model for use in the controller
module.exports = burger;