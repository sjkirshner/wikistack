var express = require('express');
var app = express();
var router = express.Router();
var models = require('../models');

var Page = models.Page;
var User = models.User;

module.exports = router;

router.get('/', function(req, res, next) {
  // res.redirect('/');
  res.render(Page.findAll());
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

router.get('/:urlTitle', function (req, res, next) {
  Page.findOne({
      where: {
          urlTitle: req.params.urlTitle
      },
      // include: [
      //     {model: User, as: 'author'}
      // ]
  })
  .then(function (page) {
      if (page === null) {
          throw generateError('No page found with this title', 404);
      } else {
          console.log(page);
          res.render('wikipage', {
              page: page
          });
      }
  })
  .catch(next);
});


router.get('/', function(req, res, next) {
   res.redirect('/');
});
