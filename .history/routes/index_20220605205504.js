var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', tit:'xm'});
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', tit:'xm'});
});



/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', tit:'xm'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', tit:'xm'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', tit:'xm'});
});

/* GET About Us page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tit:'xm'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'contact', tit:'xm'});
});

module.exports = router;
