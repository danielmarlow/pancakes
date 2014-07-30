'use strict';

angular.module('pancakesApp')
  .controller('AdminCtrl', function ($scope, Survey) {

    $scope.surveys = Survey.all();

  });
