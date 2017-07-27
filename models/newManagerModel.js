
const mongoose = require('mongoose');

var managerSchema = mongoose.Schema({
  fullName: String,
  gender: String,
  age: Number,
  email: String,
  team: String
});

const managerLogin = mongoose.model('managers', managerSchema);

module.exports = managerLogin;
