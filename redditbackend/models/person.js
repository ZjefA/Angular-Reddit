var mongoose = require('mongoose');

var PersonSchema =  new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('Person', PersonSchema);
