'use strict';

angular.module('quandlAngularApp')
  .controller('GetDataSetCtrl', function($scope, $routeParams, dataSet) {
    dataSet.get($routeParams.source_code + '/' + $routeParams.code, function(data) {
        $scope.data = data;
      });
  });