const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const request = require('request');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/assets/index.html');
});

app.post('/', function (req, res) {
  const nama1 = req.body.first;
  const nama2 = req.body.last;
  const email = req.body.email;

  const data = { members: [{ email_address: email, status: 'subscribed', merge_fields: { FNAME: nama1, LNAME: nama2 } }] };

  const jsonData = JSON.stringify(data);
  const url = 'https://us21.api.mailchimp.com/3.0/lists/483460f81a/';
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'auth 37f6c071a76a2496a36d8c2dd81352ea-us21',
    },
    body: jsonData,
  };
  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + '/assets/berhasil.html');
    } else {
      res.sendFile(__dirname + '/assets/gagal.html');
    }
  });
  request.write(jsonData);
  request.end();
});

app.listen(2312, () => console.log('connected'));
