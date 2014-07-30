'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  location: String,
  Age: Number,
  BreakfastLover: Boolean
});

module.exports = mongoose.model('User', UserSchema);
