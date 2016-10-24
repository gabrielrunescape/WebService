var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'gabriel435',
    port: '3306',
    database: 'WebPonto_develop'
});

module.exports = connection;
