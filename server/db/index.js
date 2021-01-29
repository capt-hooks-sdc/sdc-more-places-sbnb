const mysql = require('mysql');
const createTables = require('./config');
const Promise = require('bluebird');
require('dotenv').config();

const database = 'placesToStay';

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const connection = mysql.createConnection({
  host: 'localhost',
  user: user,
  password: pass,
  multipleStatements: true
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

module.exports = db;