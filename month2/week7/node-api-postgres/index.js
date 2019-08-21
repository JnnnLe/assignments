const db = require('./queries');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// route for a GET req on the root /url and return some json
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

// creating all the routes for CRUD application
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

// app listen on port 3000
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});