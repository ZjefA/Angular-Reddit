var mongoose = require('mongoose');

var CategorySchema =  new mongoose.Schema({
  name: {type: String, unique: true},
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model('Category', CategorySchema);
