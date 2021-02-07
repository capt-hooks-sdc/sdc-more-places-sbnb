require('dotenv').config;
const compression = require('compression');
const express = require('express');
const cors = require('cors');
const db = require('./db/index');

const app = express();

const PORT = process.env.PORT || 3003;

app.use(compression());
app.use(cors({origin: 'http://localhost:8000/'}));
app.use('/', express.static(__dirname + '/../client/public'));
app.use('/bundle', express.static(__dirname + '/../client/public/bundle.js'));

app.get('/api/places', (req, res) => {
  db.getPlaces((err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send(`Error getting information from database: ${err}`);
    } else {
      res.send(result);
    }
  });
});

app.get('/api/things', (req, res) => {
  db.getTodos((err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send(`Error getting information from database: ${error}`);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});