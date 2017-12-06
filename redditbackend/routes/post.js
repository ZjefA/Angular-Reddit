var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var post = require('../models/Post.js');

/* GET ALL POSTS */
router.get('/', function(req, res, next) {
  post.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
});

/* GET SINGLE POST BY ID */
router.get('/:id', function(req, res, next) {
  post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE POST */
router.post('/', function(req, res, next) {
  post.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE POST */
router.put('/:id', function(req, res, next) {
  post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE POST */
router.delete('/:id', function(req, res, next) {
  post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
