var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello puto el que lee World!');
});

app.get('/pagecount', function (req, res) {
  res.send('Hellonaa mentira World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
