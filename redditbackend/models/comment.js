var mongoose = require('mongoose');

var CommentSchema =  new mongoose.Schema({
  upVotes: Number,
  downVotes: Number
});

module.exports = mongoose.model('Comment', CommentSchema);
