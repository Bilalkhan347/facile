const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fecile',
  password: 'hamza@123',
  port: 5432, // default PostgreSQL port
});

module.exports = pool;
