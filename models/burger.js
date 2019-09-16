var orm = require("../config/orm.js");
var burgers = {

    updateBurger: function(id) {
        orm.updateOne(id);
    },

    insertBurger: function(burgerName) {
        orm.insertOne(burgerName);
    },

    findAll: function(cb) {
        orm.selectAll(data => {
            cb(data);
        });
    }
}

module.exports = burgers;