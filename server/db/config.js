module.exports = (db) => {


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
  );
  CREATE TABLE IF NOT EXISTS things (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    pic VARCHAR(255),
    revnum INT,
    revamount INT,
    price INT
  );
  CREATE TABLE IF NOT EXISTS dplaces (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    pic VARCHAR(255),
    revnum INT,
    revamount INT,
    roomtype VARCHAR(255),
    numbeds INT,
    price INT
  );
  CREATE TABLE IF NOT EXISTS dthings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    pic VARCHAR(255),
    revnum INT,
    revamount INT,
    price INT
    )`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Tables Created');
    }
  })
}
