const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017';

const dbName = 'cagurDB';

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, client) => {
  if (err) {
    return console.log('failed');
  } else {
    console.log('good!');
  }

  // insert data
  const db = client.db(dbName);

  // db.collection('cagurDB').insertMany(
  //   [
  //     {
  //       _id: 2,
  //       name: 'Wendi Cagur',
  //       age: 43,
  //     },
  //     {
  //       _id: 3,
  //       name: 'Soleh Cagur',
  //       age: 46,
  //     },
  //     {
  //       _id: 4,
  //       name: 'Vincent Cagur',
  //       age: 40,
  //     },
  //   ],
  //   (err, result) => {
  //     if (err) {
  //       return console.log('insert failed');
  //     } else {
  //       console.log(result);
  //     }
  //   }
  // );

  // db.collection('cagurDB').updateOne(
  //   {
  //     _id: 4,
  //   },
  //   {
  //     $set: {
  //       email: 'vincentvakansi@gmail.com',
  //     },
  //   }
  // );

  const keren = db
    .collection('cagurDB')
    .find({ name: 'Vincent Cagur' })
    .toArray((error, result) => {
      console.log(result);
    });
  console.log(keren);
});
