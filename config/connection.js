var mysql = require("mysql");

// create the connection information for the sql database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "bootcamp",
  database: "burgers_db"
  });
}


// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
});

// Export Connection
module.exports = connection;