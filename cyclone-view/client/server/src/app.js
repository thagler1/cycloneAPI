
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./config/db');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const port = 8081;
const data = [{ name: 'Harvey', year: 2017 },
  { name: 'Cindy', year: 2017 },
  { name: 'Katrina', year: 2006 }];

app.get('/data', (req, res) => {
  console.log('sending data', data);
  res.send(data);
});

// app.listen(process.env.PORT || 8081)

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  // Make sure you add the database name and not the collection name
  const mdb = database.db('hurdat');
  console.log('made database connection');
  require('./routes')(app, mdb);
  app.listen(port, () => {
    console.log('We are live on ', port);
  });
});
