var express = require('express');
var app = express();
var router = express.Router();
var models = require('../models');

var Page = models.Page;
var User = models.User;

module.exports = router;

router.get('/', function(req, res, next) {
  // res.redirect('/');
  res.send('got to GET /wiki/');
  next();
});

router.post('/', function(req, res, next) {
// res.json(req.body)
  var page = Page.build({
    title: req.body['title'],
    content: req.body['page-content']
  })
  page.save()
  .then(function(value){return res.json(value);})

});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.get('/', function(req, res, next) {
   res.redirect('/');
});
