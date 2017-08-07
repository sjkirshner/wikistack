var express = require('express');
var app = express();
var router = express.Router();

module.exports = router;

router.get('/', function(req, res, next) {
  // res.redirect('/');
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  res.json(req.body)
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.get('/', function(req, res, next) {
   res.redirect('/');
});
