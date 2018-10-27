const express = require('express');
const bodyParser = require('body-parser');
let app = express();
let port = 3000;

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send();
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})