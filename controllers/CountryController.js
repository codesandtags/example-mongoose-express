var Country = require('../models/Country');

exports.create = function(req, res) {
    var country = new Country({
        country: req.query.country,
        capital: req.query.capital,
        region: req.query.region,
    });

    country.save();

    console.log('country saved ', req.query.country);
    // redirect to home page...
    res.redirect(301, '/');
};