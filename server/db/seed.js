const faker = require('faker');

const db = require('./index');

db.query(`USE placesToStay;`);


// Real data
const listType = ['Barn', 'Entire guesthouse', 'Entire apartment', 'Entire condominium'];


//  add data
for (let i = 0; i < 150; i++) {

  const desc = faker.lorem.sentence();
  const pic = faker.image.city(300, 300, true);
  const revNum = faker.random.number(5);
  const revAmount = faker.random.number(180);
  const roomType = faker.lorem.sentence(3);
  const numBeds = faker.random.number(5);
  const price = faker.finance.amount(50, 400);

  const input = [desc, pic, revNum, revAmount, roomType, numBeds, price];

  db.query(
    'INSERT INTO places(description, pic, revnum, revamount, roomtype, numbeds, price) values(?, ?, ?, ?, ?, ?, ?)', input, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );

}

for (let i = 0; i < 150; i++) {

  const desc = faker.lorem.sentence();
  const pic = faker.image.city(300, 300, true);
  const revNum = faker.random.number(5);
  const revAmount = faker.random.number(180);
  const price = faker.finance.amount(50, 400);

  const input = [desc, pic, revNum, revAmount, price];

  db.query(
    'INSERT INTO things(description, pic, revnum, revamount, price) values(?, ?, ?, ?, ?)', input, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );

}