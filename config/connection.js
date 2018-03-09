var mysql = require("mysql");
var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'wings_db',
    user: 'root',
    password: 'Makerasll91!',
    port: 3306
});


module.exports = connection;