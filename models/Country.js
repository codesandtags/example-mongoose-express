var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CountrySchema = new Schema({
    country: String,
    capital: String,
    region: String,
    image: Object,
    createdOn: {type: Date, default: Date.now}
});

module.exports =  mongoose.model('Country', CountrySchema);

/**
 * Using this way, the _id attribute will not be generated: new Schema({ atributes...}, {_id: false});
 */