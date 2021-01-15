const Promise = require('bluebird');

module.exports = (db) => {
  /* if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }

  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS places (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      desc VARCHAR(255),
      pic VARCHAR(255),
      revNum INT,
      revAmount INT,
      roomType VARCHAR(255),
      numBeds INT,
      price INT,
      heart BOOLEAN
    );`)
    .error(err => {
      console.log(err);
    }); */


  return db.query(`
  CREATE TABLE IF NOT EXISTS places (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    pic VARCHAR(255),
    revnum INT,
    revamount INT,
    roomtype VARCHAR(255),
    numbeds INT,
    price INT
  )`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Table Created');
    }
  })
}
