'use strict';

angular.module('quandlAngularApp')
  .controller('NavigationCtrl', function($scope, $location) {
    $scope.gotoHome = function() {
      $location.path('/');
    };

    $scope.isHome = function() {
      return $location.path() === '/';
    }

    $scope.gotoSearchDataSet = function() {
      $location.path('/searchDataSets');
    };

    $scope.isSearchDataSets = function() {
      return $location.path() === '/searchDataSets';
    }
  });