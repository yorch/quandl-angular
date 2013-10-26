'use strict';

angular.module('quantlTestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/searchDataSets', {
        templateUrl: 'views/searchDataSets.html',
        controller: 'SearchDataSetsCtrl'
      })
      .when('/getDataSet/:source_code/:code', {
        templateUrl: 'views/getDataSet.html',
        controller: 'GetDataSetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
