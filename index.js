var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('a ver los 5 ajajaj');
});

app.post('/', function (req, res) {
  console.log(req.body);
});

app.get('/pagecount', function (req, res) {
  res.send('Hellonaa mentira World!');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
