'use strict';

var _ = require('lodash');
var Qchoice = require('./qchoice.model');

// Get list of qchoices
exports.index = function(req, res) {
  Qchoice.find(function (err, qchoices) {
    if(err) { return handleError(res, err); }
    return res.json(200, qchoices);
  });
};

// Get a single qchoice
exports.show = function(req, res) {
  Qchoice.findById(req.params.id, function (err, qchoice) {
    if(err) { return handleError(res, err); }
    if(!qchoice) { return res.send(404); }
    return res.json(qchoice);
  });
};

// Creates a new qchoice in the DB.
exports.create = function(req, res) {
  Qchoice.create(req.body, function(err, qchoice) {
    if(err) { return handleError(res, err); }
    return res.json(201, qchoice);
  });
};

// Updates an existing qchoice in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Qchoice.findById(req.params.id, function (err, qchoice) {
    if (err) { return handleError(res, err); }
    if(!qchoice) { return res.send(404); }
    var updated = _.merge(qchoice, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, qchoice);
    });
  });
};

// Deletes a qchoice from the DB.
exports.destroy = function(req, res) {
  Qchoice.findById(req.params.id, function (err, qchoice) {
    if(err) { return handleError(res, err); }
    if(!qchoice) { return res.send(404); }
    qchoice.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}