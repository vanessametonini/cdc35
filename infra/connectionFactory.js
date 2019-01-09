const mysql = require('mysql');

module.exports = function () {
    return mysql.createConnection({
        user: 'root',
        password: '',
        host: 'localhost',
        database: 'casadocodigo'
    });
}
