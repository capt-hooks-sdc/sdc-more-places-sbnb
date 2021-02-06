const fs = require('fs');
const faker = require('faker');

const writePics = fs.createWriteStream('./db/CSV_Data/pics.csv');
writePics.write('id,picurl\n', 'utf-8');

let writeThousandsPic = (writer, encoding, cb) => {
  let i = 1000;
  let id = 0;
  // eslint-disable-next-line func-style
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const picurl = faker.image.city(300, 300, true);
      const data = `${id},${picurl}\n`;
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

writeThousandsPic(writePics, 'utf-8', () => {
  writePics.end();
});