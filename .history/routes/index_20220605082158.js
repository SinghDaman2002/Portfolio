var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});



/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET About Us page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'contact'});
});

module.exports = router;
