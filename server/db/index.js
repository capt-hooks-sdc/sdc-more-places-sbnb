require('dotenv').config();
const PATH = process.env.DB_PATH || 'mongodb://localhost/test';
const mongoose = require('mongoose');
mongoose.connect(PATH, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we\'re connected to MongoDB!');
});