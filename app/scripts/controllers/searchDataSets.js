'use strict';

angular.module('quantlTestApp')
  .controller('SearchDataSetsCtrl', function($scope, dataSet) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];

    $scope.search = function() {
      dataSet.search($scope.model.filter.name, function(data) {
        $scope.data = data.docs;
      });
    };

    $scope.numberOfPages = function() {
      return Math.ceil($scope.data.length / $scope.pageSize);
    }
  });