'use strict';

angular.module('quantlTestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      .when('/', {
        templateUrl: 'views/searchDataSets.html',
        controller: 'SearchDataSetsCtrl'
      })
      .when('/getDataSet/:dataset1/:dataset2', {
        templateUrl: 'views/getDataSet.html',
        controller: 'GetDataSetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
