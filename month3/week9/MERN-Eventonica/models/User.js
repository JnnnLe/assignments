const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  user_name: String,
  concerts: Array
});

const User = mongoose.model('User', userSchema);

module.exports = User;