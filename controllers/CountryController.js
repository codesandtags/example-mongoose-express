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

exports.edit = function(req, res) {
    var countryId = req.params.countryId;
    Country.findById(countryId)
        .exec(function(error, result) {
            if (error) {
                throw new Error('Country does not exist');
                res.redirect(301, '/?status=1');
            }

            console.log('Country => ', result);
            res.render('edit-country', {
                country: result,
                helpers: {
                    select: function(value, options) {
                        var $el = $('<select />').html(options.fn(this));
                        $el.find('[value="' + value + '"]').attr({'selected': 'selected'});
                        return $el.html();
                    }
                }
            });
        });
};