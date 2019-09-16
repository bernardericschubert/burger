var orm = require("../config/orm.js");
var burgers = {

    findAll: function(cb) {
        orm.selectAll(data => {
            cb(data);
        });
    },

    insertBurger: function(burgerName) {
        orm.insertOne(burgerName);
    },
    
    updateBurger: function(id) {
        orm.updateOne(id);
    }

}

module.exports = burgers;