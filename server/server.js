const express = require('express');
const database = require('../database/database.js');

const app = express();
const port = 3001;

app.use((req, res, next) => {
  console.log(`serving ${req.method} request for ${req.url}`);
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/products/:productId', (req, res) => {
  database.getPictures(req.params.productId)
    .then((pictures) => {
      res.send(pictures);
    })
    .catch((err) => {
      console.log('app.get- an error occurred querying the database: ', err);
      res.send(500);
    });
});

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});