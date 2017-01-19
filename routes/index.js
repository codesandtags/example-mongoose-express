var express = require('express');
var router = express.Router();
var CountryController = require('../controllers/CountryController');

/* GET home page. */
router.get('/', function(req, res, next) {
    var message;

    if (req.query.status == 1) {
        message = 'Country created!';
    }

    res.render('index', {
        title: 'CRUD using Express.js and Mongoose.',
        description: 'This is great example for future applications.',
        message: message
    });
});

/* GET home page. */
router.get('/create-country', function(req, res, next) {
    res.render('create-country', { title: 'Create new Country' });
});

/* P0ST home page. */
router.post('/newcountry', function(req, res, next) {
    CountryController.create(req, res);
});

module.exports = router;
