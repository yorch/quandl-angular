'use strict';

angular.module('quantlTestApp')
  .service('dataSet', function($http, $log, apiUrl) {
    return {
      search: function(query, callback) {
        var section = 'datasets'
        var params = 'query=' + query;
        var url = apiUrl.build_url(section, params);

        $log.info('Searching DataSets', query, 'at', url);

        $http.get(url)
          .success(function(data) {
            $log.info('Search DataSet Success', query, 'result', data);
            callback(data);
          });
      },
      get: function(name, callback) {
        var section = 'datasets/' + name;
        var url = apiUrl.build_url(section);

        $log.info('Getting DataSet', name, 'at', url);

        $http.get(url)
          .success(function(data) {
            $log.info('DataSet Success', name, 'result', data);
            callback(data);
          });
      }
    }
  });