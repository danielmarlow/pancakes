'use strict';

var _ = require('lodash');
var Qtype = require('./qtype.model');

// Get list of qtypes
exports.index = function(req, res) {
  Qtype.find(function (err, qtypes) {
    if(err) { return handleError(res, err); }
    return res.json(200, qtypes);
  });
};

// Get a single qtype
exports.show = function(req, res) {
  Qtype.findById(req.params.id, function (err, qtype) {
    if(err) { return handleError(res, err); }
    if(!qtype) { return res.send(404); }
    return res.json(qtype);
  });
};

// Creates a new qtype in the DB.
exports.create = function(req, res) {
  Qtype.create(req.body, function(err, qtype) {
    if(err) { return handleError(res, err); }
    return res.json(201, qtype);
  });
};

// Updates an existing qtype in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Qtype.findById(req.params.id, function (err, qtype) {
    if (err) { return handleError(res, err); }
    if(!qtype) { return res.send(404); }
    var updated = _.merge(qtype, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, qtype);
    });
  });
};

// Deletes a qtype from the DB.
exports.destroy = function(req, res) {
  Qtype.findById(req.params.id, function (err, qtype) {
    if(err) { return handleError(res, err); }
    if(!qtype) { return res.send(404); }
    qtype.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}