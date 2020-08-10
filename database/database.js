/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', () => console.log('database is connected'));

// open a connection to the database
const picturesSchema = new mongoose.Schema({
  productId: Number,
  index: Number,
  fullSizeURL: String,
  thumbnailURL: String,
});

// define the model
const Picture = mongoose.model('Picture', picturesSchema);

// gets records by productId
const getPictures = (productId) => new Promise((resolve, reject) => {
  Picture.find({ productId }).sort({ index: 1 })
    .then((pictures) => {
      resolve(pictures);
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = {
  db,
  getPictures,
  Picture,
};
