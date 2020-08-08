const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  console.log(`serving ${req.method} request for ${req.url}`);
  next();
});

app.use(express.urlencoded({extended: true}));

app.get('/:productId', (req, res) => {
  res.send("Hello " + req.params.productId);
});

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});