const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const concertSchema = new Schema ({
  artistName: String,
  date_time: String,
  location_name: String,
  location: String
});

const Concert = mongoose.model('Concert', concertSchema);

module.exports = Concert;