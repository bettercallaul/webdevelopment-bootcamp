const express = require('express');
const app = express();
app.listen(3000, function () {
  console.log('server mu berada di port:3000');
});
app.get('/', function (req, res) {
  res.send('<h1><i>APAAN TUH</i></h1>');
});

app.get('/medsos', function (req, res) {
  res.send('<b>twitter: @bettercallaul</b>');
});
app.get('/hobi', function (req, res) {
  res.send('<ul><li><b>twitter: @bettercallaul</b><li>instagram: @sultanaulia__</li></li></ul>');
});

app.get('/about', function (req, res) {
  res.send('<b>kenalin nama gue sultana aulia, lagi belajar programming udah jalan 4 bulan :))</b>');
});
