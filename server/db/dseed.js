const faker = require('faker');

const db = require('./index');

db.query(`USE placesToStay;`);

const listType = ['Barn', 'Entire guesthouse', 'Entire apartment', 'Entire condominium', 'Hotel room', 'Private room', 'Entire house', ];

const nameArr = ['Well Lit Townhouse', 'Modern Studio for \'21\' Spring/Summer Long-Term...', 'Gorgeous Beacon Hill Apartment', 'Artful & Historic Downtown house...', 'Cozy, Private Small Rm 32\" TV w/ Mini Frig', 'Private cozy room with separate studio', 'Luxury Bright & Airy Industrial Loft Downtown', 'Petite Hollywood Central bungalow', 'Luxury studio APT located in DTLA', 'Beachfront Studio on Venice Boardwalk', 'Mountain Lodge/Walk to town...', 'Centrally Located, Cozy & Updated Condo'];

const picArr = ['https://i.imgur.com/hobsSbT.jpg', 'https://i.imgur.com/osHa2Ws.jpg', 'https://i.imgur.com/q3bTmyT.jpg', 'https://i.imgur.com/mYQQBYs.jpg', 'https://i.imgur.com/olCvo86.jpg', 'https://i.imgur.com/Kvt7wPX.jpg', 'https://i.imgur.com/ZJbml5B.jpg', 'https://i.imgur.com/dG8jpRR.jpg', 'https://i.imgur.com/imDm9xL.jpg?1', 'https://i.imgur.com/Z813iUF.jpg', 'https://i.imgur.com/eC7eCCk.jpg', 'https://i.imgur.com/tbPQcYt.jpg']

for (let i = 0; i < 12; i++) {
  const desc = nameArr[i];
  const pic = picArr[i];
  const revNum = faker.random.number(5);
  const revAmount = faker.random.number(180);
  const roomType = listType[Math.floor(Math.random() * listType.length)];
  const numBeds = faker.random.number(5);
  const price = faker.finance.amount(50, 400);

  const input = [desc, pic, revNum, revAmount, roomType, numBeds, price];

  db.query(
    'INSERT INTO dplaces(description, pic, revnum, revamount, roomtype, numbeds, price) values(?, ?, ?, ?, ?, ?, ?)', input, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
}

const thingsArr = ['Non-Spooky Haunted House Tours', 'Graveyard E-bike tour', 'Pizza with Friends!', 'Scary Movie Marathon Under The Stars', 'Top Wedding Venue\'s Tour', 'Lobster charter, catch & cook!',  'Pictures With Ghosts', 'Vacuum an entire mansion, by yourself!', 'Night walk through the forest - bring lights', 'Repair a 17th century townhome'];

const thingsPic = ['https://www.gannett-cdn.com/presto/2018/11/01/PREN/02a0c793-6613-4f37-8147-847285a8ab70-3DS_LM_090618_PressKit_SCRN_04_bmp_jpgcopy.jpg?width=660&height=396&fit=crop&format=pjpg&auto=webp', 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-245891-media_library/original/fccfad94-ad43-4975-95a3-911c02d14719.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/8307ec43-a174-4488-a9f7-6cd4bd4f4676.jpg?im_w=960', 'https://static01.nyt.com/images/2010/08/01/nyregion/ARTSNJ-SPAN/ARTSNJ-SPAN-articleLarge.jpg', 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-963871-media_library/original/5e7d180e-a12a-43b1-a7bd-54a0a46159e1.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/c01a2e2b-eb75-4087-98b2-0d8ab5038ee1.jpg?im_w=960', 'https://a0.muscache.com/im/pictures/568a612b-ae89-47b5-aa6b-e05181e0c4bd.jpg?im_w=720', 'https://i.rtings.com/images/articles/best/vacuum/vacuums/bestvacuums-medium.jpg', 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-995049-media_library/original/2f751374-f201-4580-81e8-bedc04aab6b4.jpeg?im_w=720', 'https://storage.googleapis.com/afs-prod/media/media:a2f45dc4c9c543e8a2a6fdc21ef0819e/2668.jpeg'];

for (let i = 0; i < 20; i++) {
  let desc = faker.lorem.sentence();
  let pic = faker.image.city(300, 300, true);
  const revNum = faker.random.number(5);
  const revAmount = faker.random.number(180);
  const price = faker.finance.amount(50, 400);

  if (i < 10) {
    desc = thingsArr[i];
    pic = thingsPic[i];
  }
  const input = [desc, pic, revNum, revAmount, price];

  db.query(
    'INSERT INTO dthings(description, pic, revnum, revamount, price) values(?, ?, ?, ?, ?)', input, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
}
