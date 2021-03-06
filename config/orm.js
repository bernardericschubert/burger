var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    insertOne: function(burgerName) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, { burger_name: burgerName }, (err, data) => {
            if (err) throw err;
            return(data);
        });
    },

    updateOne: function(eatBurger) {
        var queryString = "UPDATE burgers set devoured = true WHERE id = ?;";
        connection.query(queryString,[eatBurger], (err, data) => {
            if (err) throw err;
            return(data);
        });
    }

};

module.exports = orm;