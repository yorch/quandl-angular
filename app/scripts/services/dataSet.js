'use strict';

angular.module('quandlAngularApp')
  .service('dataSet', function($http, $log, apiUrl, limitToFilter) {
    var dataSetSearchUrl = function(query) {
      var section = 'datasets';
      var params = {
        'query': query
      };
      return apiUrl.buildUrl(section, params);
    }
    return {
      search: function(query, callback) {
        var url = dataSetSearchUrl(query);

        $log.info('Searching DataSets', query, 'at', url);
        $http.get(url)
          .success(function(data) {
            $log.info('Search DataSet Success', query, 'result', data);
            callback(data);
          });
      },
      promise_search: function(query) {
        var url = dataSetSearchUrl(query);

        $log.info('Searching DataSets', query, 'at', url);
        return $http.get(url).then(function(response) {
          return limitToFilter(response.data.docs, 15);
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