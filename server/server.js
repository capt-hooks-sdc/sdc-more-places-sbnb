require('dotenv').config;
const compression = require('compression');
const express = require('express');
const cors = require('cors');
const db = require('./db/index');

const app = express();

const PORT = process.env.PORT || 3003;

app.use(compression());
app.use(cors({origin: 'http://54.157.193.11:8000/'}));
app.use('/', express.static(__dirname + '/../client/public'));
app.use('/bundle', express.static(__dirname + '/../client/public/bundle.js'));

app.get('/api/places', (req, res) => {
  db.query('SELECT * FROM places LIMIT 12', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/api/things', (req, res) => {
  db.query('SELECT * FROM things LIMIT 20', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});