'use strict';

angular.module('quandlAngularApp')
  .controller('MainCtrl', function($scope, $http, $log, appSettings, dataSet) {
    $scope.model = {
      dataSet: {},
      filter: {
        dataSet: 'BITCOIN/MTGOXUSD',
        startDate: "2013-09-01",
        endDate: "2013-12-31"
      }
    };

    $scope.getDataSet = function() {
      dataSet.get_with_filter($scope.model.filter.dataSet, $scope.model.filter.startDate, $scope.model.filter.endDate,
        function(data) {
          $scope.model.dataSet = data;
        });
    };

    $scope.clearDataSet = function() {
      $scope.model.dataSet = {};
    };
  });