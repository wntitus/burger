// requiring the express package and our burger model
const express = require('express');
let burger = require('../models/burger');

// creating new express router for our routes
let router = express.Router();

// creating a GET method for our router that will use the burger model's method to get all burgers, and returns it as an object to be rendered into our handlebars template
router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

// creating a POST method for our router that uses the burger model's create method
router.post('/api/burgers', function(req, res) {
    burger.create(req.body.name, function(result) {
        res.json({ id: result.insertId })
    });
});

// creating a PUT method for our router that uses the burger model's update method to update devoured status using an id parameter
router.put('/api/burgers/:id', function(req, res) {
    let id = req.params.id
    burger.update(id, req.body.devoured, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

// exporting our router
module.exports = router;