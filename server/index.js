const express = require('express');
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);

const app = express();
const port = 3002;

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/listing-details/:listingId', (req, res) => {
  const listingId = req.params.listingId;

  knex('listings')
    .where({ id: listingId })
    .then(listing => (res.send(listing)));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
