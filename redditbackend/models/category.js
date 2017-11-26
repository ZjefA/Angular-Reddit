var mongoose = require('mongoose');

var CategorySchema =  new mongoose.Schema({
  Name: String,
});

module.exports = mongoose.model('Category', CategorySchema);
