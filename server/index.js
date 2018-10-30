const express = require('express');
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);
let app = express();
let port = 3000;

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/listing-details/:listingId', (req, res) => {
  var listingId = req.params.listingId;
  knex('listings')
    .where({id: listingId})
    .then(listing => (console.log(listing)))
    res.send()
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})