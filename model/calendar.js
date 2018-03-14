'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CalendarSchema = new Schema({
    year: Number,
    month: String,
    day: Number,
    message: String
});

module.exports = mongoose.model('CalendarEntry', CalendarSchema)