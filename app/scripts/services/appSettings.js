'use strict';

angular.module('quandlAngularApp')
  .service('appSettings', function() {
    return {
      apiToken: '',
      apiBaseUrl: 'http://www.quandl.com/api/v1/',
      apiExt: 'json'
    }
  });