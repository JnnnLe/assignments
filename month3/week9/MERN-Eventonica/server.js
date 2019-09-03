const express = require('express');
const axios = require('axios');
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect();

const app = express();
const PORT = 8080;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-hw6jk.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB using mongoose');
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}!`)
});


// once cluster is made, use mongoose to establish the connection (eg. mongoose.connect look at doc)
// click button on cluster for uri 
  // mongodb+srv://jennifer:<password>@cluster0-hw6jk.mongodb.net/test?retryWrites=true&w=majority
// keep in mind everything revolves around models
// create models dir in root for schemas (schema doc for mongoose)
// in the routes, 