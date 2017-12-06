var mongoose = require('mongoose');

var CommentSchema =  new mongoose.Schema({
  maker: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  inhoud: {type: String, required:true},
  aantalUpvotes: {type: Number, default: 0},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Comment', CommentSchema);
