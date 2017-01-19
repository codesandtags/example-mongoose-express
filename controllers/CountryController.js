var Country = require('../models/Country');

exports.create = function(req, res) {
    var country = new Country({
        country: req.body.country,
        capital: req.body.capital,
        region: req.body.region,
    });

    country.save();

    console.log('country saved ', req.query.country);
    // redirect to home page...
    res.redirect(301, '/?status=1');
};