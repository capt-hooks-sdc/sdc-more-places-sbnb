require('dotenv').config();
const { Pool } = require('pg');
const HOST = process.env.DB_HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'postgres';
const USER = process.env.DB_USER || 'student';
const PASS = process.env.DB_PASS || 'student';

const pool = new Pool({
  user: USER,
  password: PASS,
  host: HOST,
  database: DB_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.connect((err, client, release)=> {
  if (err) {
    return console.error(`Error aquiring client: ${err.stack}`);
  }
  console.log('connected to Postgres');
});