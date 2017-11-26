var mongoose = require('mongoose');

var PostSchema =  new mongoose.Schema({
  upVotes: Number,
  downVotes: Number
});

module.exports = mongoose.model('Post', PostSchema);
