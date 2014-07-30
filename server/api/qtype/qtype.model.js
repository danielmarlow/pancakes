'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QtypeSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Qtype', QtypeSchema);