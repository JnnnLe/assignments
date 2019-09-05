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
const User = require(`./models/User`);

app.use(bodyParser());

// home
app.get('/', (req, res) => {
  res.redirect('http://localhost:3000');
});

// add new user to db
app.post('/api/addUser', (req, res) => {
  const { user_name } = req.body;
  let newUser = new User({
    user_name
  })
  newUser.save((err) => {
    if (err) return handleError(err);
  })
  res.send(`Saved new user: ${newUser.user_name}!`)
});


// add new concert to db
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
  res.send(`Saved new concert: ${newConcert.artist_name}!`)
});

// find user in db



// find concert in db by given id
app.get('/api/findConcert', (req, res) => {
  Concert.find({}, (err, concerts) => {
    console.log('Return all concerts')
    res.json(concerts);
  })
});


// express server
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}.`)
});


// once cluster is made, use mongoose to establish the connection (eg. mongoose.connect look at doc)
// click button on cluster for uri 
  // mongodb+srv://jennifer:<password>@cluster0-hw6jk.mongodb.net/test?retryWrites=true&w=majority
// keep in mind everything revolves around models
// create models dir in root for schemas (schema doc for mongoose)
// in the routes, 