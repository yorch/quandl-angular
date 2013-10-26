'use strict';

angular.module('quandlAngularApp')
  .service('dataSet', function($http, $log, apiUrl) {
    return {
      search: function(query, callback) {
        var section = 'datasets';
        var params = {
          'query': query
        };
        var url = apiUrl.buildUrl(section, params);

        $log.info('Searching DataSets', query, 'at', url);

        $http.get(url)
          .success(function(data) {
            $log.info('Search DataSet Success', query, 'result', data);
            callback(data);
          });
      },
      get: function(name, callback) {
        this.get_with_filter(name, null, null, callback);
      },
      get_with_filter: function(name, startDate, endDate, callback) {
        var section = 'datasets/' + name;
        var params = {
          'trim_start': startDate,
          'trim_end': endDate
        };
        var url = apiUrl.buildUrl(section, params)

        $log.info('Getting DataSet', name, 'at', url);
        $http.get(url)
          .success(function(data) {
            $log.info('DataSet Success', name, 'result', data);
            callback(data);
          });
      }
    }
  });