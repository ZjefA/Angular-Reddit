var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var uri = 'mongodb://ZjefA:MP+5brg2@reddit-shard-00-00-xtwt9.mongodb.net:27017,reddit-shard-00-01-xtwt9.mongodb.net:' +
  '27017,reddit-shard-00-02-xtwt9.mongodb.net:27017/redditdb?ssl=true&replicaSet=Reddit-shard-0&authSource=admin';

require('./models/Category');
require('./models/Comment');
require('./models/Post');
require('./models/User');

require('./config/passport');

mongoose.connect(uri, {  useMongoClient: true }).then(() => {
  console.log('connection successful');
}).catch((err) => console.error(err));


var index = require('./routes/index');
var users = require('./routes/users');
var comments = require('./routes/comment');
var posts = require('./routes/post');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', index);
app.use('/users', users);
app.use('/comments', comments);
app.use('/post', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
