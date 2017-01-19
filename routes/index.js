var express = require('express');
var router = express.Router();

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

module.exports = router;
