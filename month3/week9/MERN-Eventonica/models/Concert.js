const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const concertSchema = new Schema ({
  artist_name: String,
  date_time: String,
  location_name: String,
  location: String,
  attendees: Array
});

const Concert = mongoose.model('Concert', concertSchema);

module.exports = Concert;