const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', () => {
  console.log('database is connected');
});

module.exports = {
  db
};