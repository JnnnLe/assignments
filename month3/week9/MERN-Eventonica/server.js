require(`dotenv`).config();
const express = require(`express`);
const axios = require(`axios`);
const mongoose = require(`mongoose`);

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-hw6jk.mongodb.net/test?retryWrites=true&w=majority
`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on(`error`, console.error.bind(console, `Connection error with MongoDB:`));
db.once(`open`, () => {
  console.log(`Connected to MongoDB!`)
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
  let newUser = new User({user_name});
  newUser.save((err) => {
    if (err) return handleError(err);
  })
  res.send(`Saved new user: ${newUser}`);
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
  res.send(`Saved new concert: ${newConcert.artist_name}!`)
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
app.get(`/api/findUser/:_id`, (req, res) => {
  const { _id } = req.params;
  User.find({_id: _id}, (err, users) => {
    if (err) throw err;
    res.send(`Found the user: ${users[0]}`);
  })
});


// find concert in db by given id
app.get(`/api/findConcert/:_id`, (req, res) => {
  const { _id } = req.params;
  Concert.find({_id: _id}, (err, concerts) => {
    if (err) throw err;
    res.json(`Found concert: ${concerts[0]}`);
  })
});

// delete user in db given id
app.delete(`/api/deleteUser/:_id`, (req, res) => {
  const { _id } = req.params;
  User.findOneAndDelete({_id: _id}, (err, users) => {
    if (err) throw err;
    res.send(`Deleted the user: ${users}`);
  })
});

// delete concert in db given id

// Search all of the concerts a specific user is attending

// Search all of the users going to a specific concert


// express server
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}.`)
});