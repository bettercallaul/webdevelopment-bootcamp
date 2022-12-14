//jshint esversion:6
require('dotenv').config();
console.log(process.env.API_KEY);
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const app = express();

app.use(express.static('/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/userDB', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(encrypt, { secret: process.env.SECRET_KEY, encryptedFields: ['password'] });

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password,
  });

  newUser.save((err) => {
    if (!err) {
      res.render('secrets');
    } else {
      console.log(err);
    }
  });
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne(
    {
      email: username,
    },
    (err, foundUser) => {
      if (!err) {
        if (foundUser) {
          if (foundUser.password === password) {
            res.render('secrets');
          }
        }
      } else {
        console.log(err);
      }
    }
  );
});

app.get('/logout', (req, res) => {
  res.render('home');
});

app.listen(7193, () => {
  console.log('localhost:7193');
});
