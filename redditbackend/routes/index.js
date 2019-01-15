let express = require('express');
let router = express.Router();
let jwt = require('express-jwt');
let mongoose = require('mongoose');
let Category = mongoose.model('Category');

let auth = jwt({secret: process.env.REDDIT_BACKEND_SECRET, _userProperty: 'payload'});

/* GET home page. (all categories)*/
router.get('/API/categories/', /* auth, */ function(req, res, next) {
  let query = Category.find();
  query.exec(function (err, categories) {
    if(err){return next(err);}
    res.json(categories);
  });
});

/* POST new category */
router.post('/API/categories/', function(req, res, next) {
  let category = new Category({ name: req.body.name, posts: req.body.posts});
  category.save(function(err, rec) {
    if(err){return next(err)}
    res.json(rec);
  })
});

/* GET SINGLE CATEGORY BY ID */
router.get('/API/categories/:id', function(req, res, next) {
  let query = Category.findById(req.params.id).populate('posts').populate('comments');
  query.exec(function (err, category) {
    if(err){return next(err);}
    res.json(category);
  });
});

module.exports = router;
