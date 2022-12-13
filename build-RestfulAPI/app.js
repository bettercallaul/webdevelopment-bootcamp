const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect('mongodb://127.0.0.1:27017/wikiDB', { useNewUrlParser: true });

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model('Article', articleSchema);

const item1 = new Article({
  title: 'ChatGPT',
  content: 'ChatGPT is a state-of-the-art natural language processing (NLP) model developed by OpenAI. It is a variant of the popular GPT-3 model, which is known for its ability to generate human-like text based on a given prompt.',
});

app
  .route('/articles')
  .get((req, res) => {
    Article.find((err, cariArtikel) => {
      if (!err) {
        res.send(cariArtikel);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    const artikleBaru = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    artikleBaru.save((err) => {
      if (!err) {
        res.send('berhasil');
      } else {
        res.send(err);
      }
    });
  })

  .delete((req, res) => {
    Article.deleteMany((err) => {
      if (!err) {
        res.send('berhasil hapus semuanya');
      } else {
        res.send(err);
      }
    });
  });

// //////////////////// this is article specific /////////////////////////////////////

app
  .route('/articles/:articleTitle')

  .get((req, res) => {
    Article.findOne({ title: req.params.articleTitle }, (err, foundArticle) => {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send('articles not found');
      }
    });
  })

  .put((req, res) => {
    Article.updateOne({ title: req.params.articleTitle }, { title: req.body.title, content: req.body.content }, { overwrite: true }, (err) => {
      if (!err) {
        res.send('update sukses mang');
      } else {
        res.send(err);
      }
    });
  })

  .patch((req, res) => {
    Article.updateOne({ title: req.params.articleTitle }, { $set: req.body }, (err) => {
      if (!err) {
        res.send('sip mantap');
      } else {
        res.send(err);
      }
    });
  })

  .delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, { $set: req.body }, (err) => {
      if (!err) {
        res.send('berhasil hapus semuanya');
      } else {
        res.send(err);
      }
    });
  });
app.listen(8789, () => {
  console.log('port: 8789');
});
