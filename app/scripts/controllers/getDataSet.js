'use strict';

angular.module('quantlTestApp')
  .controller('GetDataSetCtrl', function($scope, $routeParams, dataSet) {
    dataSet.get($routeParams.dataset1 + '/' + $routeParams.dataset2, function(data) {
        $scope.data = data;
      });
  });