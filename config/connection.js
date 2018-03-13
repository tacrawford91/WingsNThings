var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: '127.0.0.1',
        database: 'wings_db',
        user: 'root',
        password: 'Makerasll91!',
        port: 3306
    });
}
connection.connect();

module.exports = connection;