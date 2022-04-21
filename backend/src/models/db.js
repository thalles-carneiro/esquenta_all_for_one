const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: 'Is2Docker',
  database: 'tryunfo',
});

module.exports = db;
