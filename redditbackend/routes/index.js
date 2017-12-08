let express = require('express');
let router = express.Router();
let jwt = require('express-jwt');
let mongoose = require('mongoose');
let Category = mongoose.model('Category');

let auth = jwt({secret: process.env.REDDIT_BACKEND_SECRET, _userProperty: 'payload'});

/* GET home page. (all categories)*/
router.get('/categories', auth, function(req, res, next) {
  let query = Category.find();
  query.exec(function (err, categories) {
    if(err){return next(err);}
    res.json(categories);
  });
});

/* GET SINGLE CATEGORY BY ID */
router.get('/categories/:id', function(req, res, next) {
  let query = Category.findById(req.params.id).populate('posts').populate('comments');
  query.exec(function (err, category) {
    if(err){return next(err);}
    res.json(category);
  });
});

module.exports = router;
