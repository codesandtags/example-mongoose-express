var express = require('express');
var router = express.Router();
var CountryController = require('../controllers/CountryController');

/* GET home page. */
router.get('/create-country', function(req, res, next) {
    res.render('create-country', { title: 'Create new Country' });
});

/* P0ST home page. */
router.post('/create', function(req, res, next) {
    CountryController.create(req, res);
});

/* P0ST home page. */
router.post('/update', function(req, res, next) {
    CountryController.update(req, res);
});

/* GET home page. */
router.get('/list', function(req, res, next) {
    CountryController.list(req, res);
});

/* GET home page. */
router.get('/edit/:countryId', function(req, res, next) {
    CountryController.edit(req, res);
});

/* GET home page. */
router.get('/remove/:countryId', function(req, res, next) {
    CountryController.remove(req, res);
});


module.exports = router;
