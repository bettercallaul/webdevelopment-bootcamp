//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');

const homeStartingContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio corporis sed accusamus quis quo necessitatibus reprehenderit perspiciatis exercitationem voluptatum maiores fugiat aperiam vel, aliquid officia fuga aliquam et, possimus nemo consequatur, cumque porro ducimus. Iure commodi ducimus possimus recusandae!';
const aboutContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus modi rem voluptatem quaerat.';
const contactContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing.';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const arrayy = [];

app.get('/', function (req, res) {
  res.render('home', { homeContent: homeStartingContent, arrayy: arrayy });
});

app.get('/about', function (req, res) {
  res.render('about', { AboutContent: aboutContent });
});

app.get('/contact', function (req, res) {
  res.render('contact', { ContactContent: contactContent });
});

app.get('/compose', function (req, res) {
  res.render('compose');
});

app.post('/compose', function (req, res) {
  const newPost = {
    title: req.body.composeTitle,
    content: req.body.composeContent,
  };

  arrayy.push(newPost);

  res.redirect('/');
});

app.get('/posts/:post', (req, res) => {
  const elise = _.lowerCase(req.params.post);

  arrayy.forEach(function (aray) {
    const arayJadi = _.lowerCase(aray.title);

    if (elise === arayJadi) {
      res.render('post', { lengket: arayJadi, lengket1: aray.content });
    }
  });
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
