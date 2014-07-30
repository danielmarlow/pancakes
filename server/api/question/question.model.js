'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var QuestionSchema = new Schema({
  qtext: String,
  qtype: {type: ObjectId, ref: 'Qtype'},
  survey: {type: ObjectId, ref: 'Survey'}
});

module.exports = mongoose.model('Question', QuestionSchema);
