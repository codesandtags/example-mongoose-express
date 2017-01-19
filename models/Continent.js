var mongoose = require('mongoose');
var Country = require('./Continent');
var Schema = mongoose.Schema;
var ContinentSchema = new Schema({
    name: String,
    countries : [Country],
});

module.exports =  mongoose.model('Continent', ContinentSchema);