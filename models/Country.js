var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CountrySchema = new Schema({
    country: String,
    capital: String,
    region: String
});
var Country = mongoose.model('Country', CountrySchema);
export default Country;