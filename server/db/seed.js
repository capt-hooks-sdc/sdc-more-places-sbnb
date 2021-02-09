require('dotenv').config();
const { Pool } = require('pg');
const HOST = process.env.DB_HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'postgres';
const USER = process.env.DB_USER || 'postgres';
const PASS = process.env.DB_PASS || '';

const pool = new Pool({
  user: USER,
  password: PASS,
  host: HOST,
  database: DB_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// seed pictures table

const picQuery = 'COPY pics (id, picurl) FROM \'/Users/eugene/work/hrr50/SDC/sdc-more-places-sbnb/server/db/CSV_Data/pics.csv\' CSV DELIMITER \',\' HEADER';

pool.query(picQuery)
  .then((result) => {
    console.log(`pictures seeded: ${result.rowCount}`);
    // seed places table

    const placeQuery = 'COPY places (id, descript, picurl, numrating, rating, roomtype, numbeds, price) FROM \'/Users/eugene/work/hrr50/SDC/sdc-more-places-sbnb/server/db/CSV_Data/places.csv\' CSV DELIMITER \',\' HEADER';

    pool.query(placeQuery)
      .then((result) => {
        console.log(`places seeded ${result.rowCount}`);
        // seed todos table

        const todosQuery = 'COPY todos (id, descript, picurl, numrating, rating, price) FROM \'/Users/eugene/work/hrr50/SDC/sdc-more-places-sbnb/server/db/CSV_Data/todos.csv\' CSV DELIMITER \',\' HEADER';

        pool.query(todosQuery)
          .then((result) => {
            console.log(`todos seeded: ${result.rowCount}`);
            pool.end(()=> console.log('pool has ended'));
          })
          .catch(err => console.error(`Error occur seeding todos: ${err}`));
      })
      .catch(err => console.error(`Error occur seeding places: ${err}`));
  })
  .catch(err => console.error(`Error occur seeding pictures: ${err}`));