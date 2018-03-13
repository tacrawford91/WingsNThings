var mysql = require("mysql");
var connection;


if (process.env.JAWSDB_URL) {
    //setup jawsDB connection when hosting on heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //if not on heroku - use local db 
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