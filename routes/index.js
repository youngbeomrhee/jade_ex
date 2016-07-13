var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/attribute', function(req, res, next) {
  res.render('attribute');
});

router.get('/case', function(req, res, next) {
  res.render('case');
});

router.get('/code', function(req, res, next) {
  res.render('code');
});

router.get('/conditional', function(req, res, next) {
  res.render('conditional');
});

module.exports = router;
