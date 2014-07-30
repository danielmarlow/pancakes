'use strict';

angular.module('pancakesApp')
  .factory('Survey', function ($resource) {
    return $resource('/api/surveys', null, {
      'all': {
        method: 'GET',
        isArray: true
      }
    });
  });
