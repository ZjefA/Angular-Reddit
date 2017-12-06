var mongoose = require('mongoose');

var PostSchema =  new mongoose.Schema({
  titel: {type: String, require: true},
  aantalUpvotes: {type: Number, default: 0},
  maker: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  inhoud: {type: String, required: true},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Post', PostSchema);
