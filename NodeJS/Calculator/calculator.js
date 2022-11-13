const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/bmicalculator', function (req, res) {
  res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/', function (req, res) {
  let a = Number(req.body.num1);
  let b = Number(req.body.num2);
  let result = a + b;
  res.send('hasilnya adalah ' + result);
});

app.post('/bmicalculator.html', function (req, res) {
  let apa = parseFloat(req.body.n1);
  let bapa = parseFloat(req.body.n2);
  let result = bapa / Math.pow(apa / 100, 2).toFixed(1);
  res.send('indeks BMI adalah ' + result);
});

app.listen(5000, function () {
  console.log('anda sudah masuk di port:5000');
});
