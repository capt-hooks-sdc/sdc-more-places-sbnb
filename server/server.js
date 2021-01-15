const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index');

const app = express();

app.use(express.static(__dirname + '/../client/public'));

app.get('/api/places', (req, res) => {
  db.query(`SELECT * FROM places`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
