const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);

const app = express();
const port = 3002;

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/bundle.js'));
});

app.get('/listing/:listingId', (req, res) => {
  const listingId = req.params.listingId;

  knex('listings')
    .where({ id: listingId })
    .then(listing => (res.send(listing)));
});

const html = path.join(__dirname, '/../dist/index.html');

app.get('/:listingId', (req, res) => {
  res.sendFile(html);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
