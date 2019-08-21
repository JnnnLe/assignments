const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
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
app.get('/users', (request, response) => {

});

app.get('/users/:id', (request, response) => {

});

app.post('users', (request, response) => {

});

app.put('/users/:id', (request, response) => {

});

app.delete('/users/:id', (request, response) => {

});


// app listen on port 3000
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});