
const fs = require('fs');
const faker = require('faker');

const writePlaces = fs.createWriteStream('./db/CSV_Data/todos.csv');
writePlaces.write('id,descript,picurl,numrating,rating,price\n', 'utf-8');

let writeFiveMillionToDos = (writer, encoding, cb) => {
  let i = 10000000;
  let id = 0;
  // eslint-disable-next-line func-style
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const desc = faker.lorem.sentence();
      const pic = Math.floor(Math.random() * 1000) + 1;
      const numRating = faker.random.number(180);
      const rating = faker.random.number(5);
      const price = faker.finance.amount(50, 400, 2);
      const data = `${id},${desc},${pic},${numRating},${rating},${price}\n`;
      if (i === 0) {
        writer.write(data, encoding, cb);  
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
};

writeFiveMillionToDos(writePlaces, 'utf-8', () => {
  writePlaces.end();
});