var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});



/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', tit:''});
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', tit:''});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', tit:''});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', tit:''});
});

/* GET About Us page. 
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Express', tit:''});
});*/

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', tit:''});
});

module.exports = router;
