'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SurveySchema = new Schema({
  name: String
});

module.exports = mongoose.model('Survey', SurveySchema);
