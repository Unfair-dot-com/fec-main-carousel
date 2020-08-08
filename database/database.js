const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', () => console.log('database is connected') );


//open a connection to the database
const picturesSchema = new mongoose.Schema({
  productId: Number,
  index: Number,
  fullSizeURL: String
});

//define the model
const Picture = mongoose.model('Picture', picturesSchema);

const getRecords = (productId) => {
  return undefined;
}

module.exports = {
  db,
  getRecords,
  Picture
};