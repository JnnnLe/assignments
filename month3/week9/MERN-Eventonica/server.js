require(`dotenv`).config();
const express = require(`express`);
const axios = require(`axios`);
const mongoose = require(`mongoose`);
// const bodyParser = require(`body-parser`);

const app = express();
const PORT = 8080;
// app.use(bodyParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-hw6jk.mongodb.net/test?retryWrites=true&w=majority
`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on(`error`, console.error.bind(console, `connection error:`));
db.once(`open`, () => {
  console.log(`Connected!`)
});

const Concert = require(`./models/Concert`);
const User = require(`./models/User`);

// home
app.get(`/`, (req, res) => {
  res.redirect(`http://localhost:3000`);
});

// add new user to db
app.post(`/api/addUser`, (req, res) => {
  const { user_name } = req.body;
    User.create({user_name}, (err, response) => {
    if (err) return handleError(err);
    console.log(response);
    res.json(response);
  })
});

// add new concert to db
app.post(`/api/addConcert`, (req, res) => {
  const { artist_name, date_time, location_name, location, attendees } = req.body;
  let newConcert = new Concert({
    artist_name,
    date_time,
    location_name,
    location,
    attendees
  })
  newConcert.save((err) => {
    if (err) return handleError(err);
  })
  res.send(`Saved new concert: ${newConcert,artist_name}!`)
});

// find all users
app.get(`/api/allUsers`, (req, res) => {
  User.find({}, (err, users) => {
    if (err) throw err;
    res.send(users);
  })
});

// find all concert
app.get(`/api/allConcerts`, (req, res) => {
  Concert.find({}, (err, users) => {
    if (err) throw err;
    res.send(users);
  })
});

// find user in db by given id
app.get(`/api/users/:user_name`, (req, res) => {
  const { id } = req.params;
  // TODO: find user by id
  User.find({user_name: id}, (err, users) => {
    if (err) throw err;
    res.send(users);
  })
});


// find concert in db by given id
app.get(`/api/findConcert`, (req, res) => {
  Concert.find({}, (err, concerts) => {
    if (err) {
      console.log(err);
    }
    console.log(`Found stuff`)
    res.json(concerts);
  })
});

// delete user in db given id

// delete concert in db given id

// Search all of the concerts a specific user is attending

// Search all of the users going to a specific concert


// express server
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}.`)
});