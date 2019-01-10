var mysql = require('mysql');

function createConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'estoque'
  });
}

module.exports = function() {
  return createConnection;
}
