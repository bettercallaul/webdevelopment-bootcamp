const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  console.log(req.body.namaKota);
  const query = req.body.namaKota;
  const apiKey = '13f4ce70b0daf27c1f8aedcc94b230b4';
  const unit = 'metric';
  const link = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
  https.get(link, function (resp) {
    console.log(resp.statusCode);

    resp.on('data', function (data) {
      const weatherData = JSON.parse(data);
      const city = weatherData.name;
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgurl = `https://openweathermap.org/img/wn/${icon}@2x.png `;
      res.write(`<h1>suhu udara kota ${city} memiliki suhu ${temp} celcius, sehingga dinyatakan ${description}</h1>`);
      res.write(`<i>jadi gimana nih cuacanya ${description}/mendung</i>`);
      res.write(`<br>`);
      res.write('<img src=' + imgurl + '>');
      res.send();
    });
  });
});

// app.get('/', function (req, res) {
//   const query = 'batu';
//   const apiKey = '13f4ce70b0daf27c1f8aedcc94b230b4';
//   const unit = 'metric';
//   const link = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
//   https.get(link, function (resp) {
//     console.log(resp.statusCode);

//     resp.on('data', function (data) {
//       const weatherData = JSON.parse(data);
//       const city = weatherData.name;
//       const temp = weatherData.main.temp;
//       const description = weatherData.weather[0].description;
//       const icon = weatherData.weather[0].icon;
//       const imgurl = `https://openweathermap.org/img/wn/${icon}@2x.png `;
//       res.write(`<h1>suhu udara kota ${city} memiliki suhu ${temp} celcius, sehingga dinyatakan ${description}</h1>`);
//       res.write(`<i>jadi gimana nih cuacanya ${description}/mendung</i>`);
//       res.write(`<br>`);
//       res.write('<img src=' + imgurl + '>');
//       res.send();
//     });
//   });
// });

app.listen(3000, function () {
  console.log('already connected');
});
