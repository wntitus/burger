const express = require('express');
let burger = require('../models/burger');

let router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.create(req.body.name, function(result) {
        res.json({ id: result.insertId})
    });
});

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

module.exports = router;