
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get('/', (req, res) => {
    burger.findAll(data => {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post('/api/insert/:burgerName', (req, res) => {
    var burgerName = req.params.burgerName;
    burger.insertBurger(burgerName);
    res.json(false);
});

router.put('/api/update/:id', (req, res) => {
    var id = req.params.id;
    burger.updateBurger(id);
    res.json(false);
});

module.exports = router;