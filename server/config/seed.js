/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Survey = require('../api/survey/survey.model');
var User = require('../api/user/user.model');
var Question = require('../api/question/question.model');
var Qchoice = require('../api/qchoice/qchoice.model');
var Qtype = require('../api/qtype/qtype.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Survey.find({}).remove(function () {
  Survey.create({
    name: 'iHop'
  },{
    name: 'Das Survey'
  })
});

User.find({}).remove(function () {
  User.create({
      name: 'Nick',
      location: 'CO',
      Age: '27',
      BreakfastLover: true
    },{
      name: 'Burt',
      location: 'Da Hood',
      Age: '35',
      BreakfastLover: false
    },{
      name: 'Ernie',
      location: 'Da Streets',
      Age: '35',
      BreakfastLover: true
    },{
      name: 'Dan',
      location: 'The Woods',
      Age: '19',
      BreakfastLover: true
    },{
      name: 'Trevor',
      location: 'Bicycle Lane',
      Age: '90',
      BreakfastLover: false
  });
});

Question.find({}).remove(function () {
  Question.create({
    qtext: 'How hard was it to find what you wanted to eat?',
    type: Number,
    survey: Survey.find({name: 'iHop'}).exec().then(function(survey) {
      return survey._id;
    })
  });
});
