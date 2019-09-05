const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-hw6jk.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  console.log('Open connection to MongoDB!')
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const Concert = require(`./models/Concert`);

app.use(bodyParser());

app.post('/api/addConcert', (req, res) => {
  const { artist_name, date_time, location_name, location } = req.body;
  let newConcert = new Concert({
    artist_name,
    date_time,
    location_name,
    location
  })
  newConcert.save((err) => {
    if (err) return handleError(err);
  })
  res.send('Saved new concert!')
})

app.get('/', (req, res) => {
  res.redirect('http://localhost:3000');
});

app.get('/api/concert', (req, res) => {
  Concert.find({}, (err, concerts) => {
    res.json(concerts)
  })
});


// express  server
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}.`)
});


// once cluster is made, use mongoose to establish the connection (eg. mongoose.connect look at doc)
// click button on cluster for uri 
  // mongodb+srv://jennifer:<password>@cluster0-hw6jk.mongodb.net/test?retryWrites=true&w=majority
// keep in mind everything revolves around models
// create models dir in root for schemas (schema doc for mongoose)
// in the routes, 