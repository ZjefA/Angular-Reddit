let express = require('express');
let router = express.Router();
let jwt = require('express-jwt');
let mongoose = require('mongoose');
let Category = mongoose.model('Category');

let auth = jwt({secret: process.env.REDDIT_BACKEND_SECRET, _userProperty: 'payload'})

/* GET home page. (all categories)*/
router.get('/API/categories/', auth, function(req, res, next) {
  Category.find(function (err, categories) {
    if(err){return next(err);}
    res.json(categories);
  });
});

/* GET SINGLE CATEGORY BY ID */
router.get('/API/categories/:name', function(req, res, next) {
  Category.findById(req.params.id, function (err, category) {
    if (err) return next(err);
    res.json(category);
  });
});

/* SAVE CATEGORY */
router.post('/', function (req, res, next) {
  let category = new Category(req.body);
  category.save(function (err, rec) {
    if(err){return next(err);}
    res.json(rec);
  })
});

/* UPDATE POST */
router.put('/:id', function(req, res, next) {
  Category.findByIdAndUpdate(req.params.id, req.body, function (err, category) {
    if (err) return next(err);
    res.json(category);
  });
});

/* DELETE POST */
router.delete('/:id', function(req, res, next) {
  Category.findByIdAndRemove(req.params.id, req.body, function (err, category) {
    if (err) return next(err);
    res.json(category);
  });
});

module.exports = router;
