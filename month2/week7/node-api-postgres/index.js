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

// app listen on port 3000
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});