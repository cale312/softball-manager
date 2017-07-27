const mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
  fullName: String,
  gender: String,
  age: Number,
  email: String,
  team: String
});

const playerLogin = mongoose.model('players', playerSchema);

module.exports = playerLogin;
