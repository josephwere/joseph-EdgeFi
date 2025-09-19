const mysql = require('mysql2/promise');

let pool;

function getPool() {
  if (pool) return pool;

  const config = {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    user: process.env.MYSQL_USER || 'edgefi',
    password: process.env.MYSQL_PASS || 'edgefi_pass',
    database: process.env.MYSQL_DB || 'wifirental',
    waitForConnections: true,
    connectionLimit: 10
  };

  pool = mysql.createPool(config);
  return pool;
}

module.exports = { getPool };
