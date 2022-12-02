const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
app.listen(1234, () => console.log('connected'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  const query = req.body.kota;
  const apiKey = '13f4ce70b0daf27c1f8aedcc94b230b4';
  const unit = 'metric';
  const link = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
  https.get(link, function (resp) {
    console.log(resp.statusCode);
    resp.on('data', function (data) {
      const dataCuaca = JSON.parse(data);
      const kota = dataCuaca.name;
      const temp = dataCuaca.main.temp;
      const deskripsi = dataCuaca.weather[0].description;
      const icon = dataCuaca.weather[0].icon;
      const imgurl = `https://openweathermap.org/img/wn/${icon}@2x.png `;
      const caption = `suhu udara kota ${kota} saat ini adalah ${temp}°C, jadi dapat dikatakan ${deskripsi}`;

      res.render('list', { cuacaCuaca: caption, gambar: imgurl });

      res.send();
    });
  });
});
