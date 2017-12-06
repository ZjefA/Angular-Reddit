var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema =  new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true},
  hash: String,
  salt: String,
  categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
});

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(32).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);
  return jwt.sign({
    _id: this.id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, process.env.REDDIT_BACKEND_SECRET);
};

module.exports = mongoose.model('User', UserSchema);
