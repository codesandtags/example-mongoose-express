var express = require('express');
var router = express.Router();
var CountryController = require('../controllers/CountryController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongoose and Express.js' });
});

/* GET home page. */
router.get('/newcountry', function(req, res, next) {
    CountryController.create(req, res);
});

module.exports = router;
