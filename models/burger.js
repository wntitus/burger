let orm = require('../config/orm');

let burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(response) {
            cb(response);
        })
    },

    create: function(val, cb) {
        orm.insertOne('burgers', 'burger_name', val, function(response) {
            cb(response);
        })
    },

    update: function(id, cv, cb) {
        orm.updateOne('burgers', 'devoured', cv, id, function(response) {
            cb(response);
        })
    }
}

module.exports = burger;