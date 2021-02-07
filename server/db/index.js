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

pool.connect((err) => {
  if (err) {
    console.error(`Error connecting to the database: ${err}`);
  } else {
    console.log(`Connected to PostgreSQL database: ${DB_NAME}`);
  }
});

const getPlaces = (cb) => {
  // Start grabs a random starting value between 1-9999988 from the database to return to the client
  // End is the next 3-12 values from start that will be returned to the client
  // It simulates how all property will some amount of "more places to stay" at any location, but does not have a full set of 12 other places to recommend.
  let start = Math.floor(Math.random() * 9999987) + 1;
  let end = start + Math.floor(Math.random() * 9) + 3;
  let queryStr = `select p.id, p.descript, pics.picurl, p.numrating, p.rating, p.roomtype, p.numbeds, p.price from places p inner join pics on p.picurl = pics.id where p.id>${start} AND p.id<=${end}`;
  pool.query(queryStr, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result.rows);
    }
  });
};

const getTodos = (cb) => {
  // Start grabs a ramdon starting value between 1-9999988 from the database to return to the client
  // End is the next 5-20 values from the start that will be returned to the client
  // It simulates how all property will have some amount of "things to do" at any location, but does not have a full set of 20 things to do at all locations.
  let start = Math.floor(Math.random() * 9999987) + 1;
  let end = start + Math.floor(Math.random() * 15) + 5;
  let queryStr = `select t.id, t.descript, pics.picurl, t.numrating, t.rating, t.price from todos t inner join pics on t.picurl = pics.id where t.id>${start} AND t.id<=${end}`;
  pool.query(queryStr, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result.rows);
    }
  });
};

module.exports = {
  // query functions here
  getPlaces,
  getTodos
};