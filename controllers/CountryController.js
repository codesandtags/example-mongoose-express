var Country = require('../models/Country');


exports.list = function(req, res) {
    var query = Country.find();

    query.sort({country: 'asc'})
        .limit(10)
        .exec(function(error, results) {
            res.render('list-countries', {title: 'Countries List', countries: results})
        });
};

exports.create = function(req, res) {
    var country = new Country({
        country: req.body.country,
        capital: req.body.capital,
        region: req.body.region,
        image: {full: req.body.urlCountryFlag}
    });

    country.save();

    console.log('country saved ', req.query.country);
    // redirect to home page...
    res.redirect(301, '/?status=1');
};