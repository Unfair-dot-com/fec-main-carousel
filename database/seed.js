/* eslint-disable no-var */
const db = require('./database.js').db;
const Picture = require('./database.js').Picture;

const baseURL = 'https://fec-hrr47.s3.us-east-2.amazonaws.com/';
const folder = {
  fullSize: 'fullSizeRandoms/',
  thumbnail: 'thumbnailRandoms/',
  product0Full: '',
  product0Thumbnail: 'thumbnailProduct0/'
};
const fileName = {
  fullSize: '',
  thumbnail: 'thumbnail',
  product0Full: 'sunMoon',
  product0Thumbnail: 'sunMoon_thumbnail',
};

var randNumGenerator = (min, max) => {
  return Math.floor((Math.random() * max) + min);
}

// randomize pictures
// iterate through all productIDs, 1-99
// eslint-disable-next-line no-plusplus
for (let id = 1; id < 100; id++) {
  // choose a random number of pictures for the product, min 5, max 10 inclusive
  const maxIndex = randNumGenerator(5, 11);
  // then iterate through all indicies
  for (var index = 0; index < maxIndex; index++) {
    // generate a padded, random picture id between 1 and 40 inclusive
    const paddedID = randNumGenerator(1, 41).toString().padStart(5,0);
    // define a new document
    const picture = new Picture({
      productId: id,
      index,
      fullSizeURL: `${baseURL}${folder.fullSize}${fileName.fullSize}${paddedID}.jpg`,
      thumbnailURL: `${baseURL}${folder.thumbnail}${fileName.thumbnail}${paddedID}.jpg`,
    });

    // save to the database
    picture.save((err) => {
      if (err) console.log('an error occurred writing to database: ', err);
    }),
  }
}

//import product specific pictures
  //iterate from 1 to 9
for (var index = 1; index < 10; index++) {
  //define the picture id
  var paddedID = index.toString().padStart(5,0);
  //define a new document
  var picture = new Picture({
    'productId': 0,
    'index': index - 1,
    'fullSizeURL': `${baseURL}${folder.product0Full}${fileName.product0Full}${paddedID}.jpg`,
    'thumbnailURL': `${baseURL}${folder.product0Thumbnail}${fileName.product0Thumbnail}${paddedID}.jpg`
  });

  //save to the database
  picture.save((err, picture) => {
    if (err) return console.log('an error occurred writing to database: ', err);
  })
}