var orm = require("../config/orm.js");
var burger = {

    updateBurger: function (id) {
        orm.updateOne(id);
    },

    insertBurger: function (burgerName) {
        orm.insertOne(burgerName);
    },

    findAll: function (all) {
        orm.selectAll(data => {
            all(data);
        });
    }
}

module.exports = burger;